// ----------------------------------------------------
// i18n — Language management module
// ----------------------------------------------------

const SUPPORTED_LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'fr';
const STORAGE_KEY = 'portfolio-lang';

// Eagerly load all UI label files: ../data/fr/ui.js, ../data/en/ui.js
const uiModules = import.meta.glob('../data/*/ui.js', { eager: true });

// Eagerly load all resume files: ../data/fr/resume.js, ../data/en/resume.js
const resumeModules = import.meta.glob('../data/*/resume.js', { eager: true });

// Eagerly load all project files: ../data/fr/projects/*.js, ../data/en/projects/*.js
const projectModules = import.meta.glob('../data/*/projects/*.js', { eager: true });

/**
 * Detect browser language, fallback to DEFAULT_LANG
 */
function detectBrowserLang() {
  const browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

/**
 * Get current language: localStorage > browser detection > default
 */
export function getCurrentLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  return detectBrowserLang();
}

/**
 * Set language and persist to localStorage
 */
export function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

/**
 * Helper to get UI labels dictionary for a given language
 */
function getLabels(lang) {
  const mod = uiModules[`../data/${lang}/ui.js`];
  if (mod && (mod.UI || mod.default)) {
    return mod.UI || mod.default;
  }
  const fallbackMod = uiModules[`../data/${DEFAULT_LANG}/ui.js`];
  return fallbackMod ? (fallbackMod.UI || fallbackMod.default) : {};
}

/**
 * Get UI label for key in current language
 */
export function t(key, ...args) {
  const lang = getCurrentLang();
  const labels = getLabels(lang);
  const defaultLabels = getLabels(DEFAULT_LANG);
  const val = labels[key] !== undefined ? labels[key] : defaultLabels[key];
  if (typeof val === 'function') return val(...args);
  return val !== undefined ? val : key;
}

/**
 * Load resume data for current language with fallback
 */
export function loadResumeData() {
  const lang = getCurrentLang();

  // Try current language
  const langKey = `../data/${lang}/resume.js`;
  if (resumeModules[langKey]) {
    return resumeModules[langKey].RESUME_DATA || resumeModules[langKey].default;
  }

  // Fallback: try other language
  const fallbackLang = lang === 'fr' ? 'en' : 'fr';
  const fallbackKey = `../data/${fallbackLang}/resume.js`;
  if (resumeModules[fallbackKey]) {
    return resumeModules[fallbackKey].RESUME_DATA || resumeModules[fallbackKey].default;
  }

  // Last resort: return first available
  const firstKey = Object.keys(resumeModules)[0];
  return firstKey ? (resumeModules[firstKey].RESUME_DATA || resumeModules[firstKey].default) : null;
}

/**
 * Load all projects for current language with fallback
 * @returns {Array} sorted array of project objects
 */
export function loadProjectsData() {
  const lang = getCurrentLang();
  const fallbackLang = lang === 'fr' ? 'en' : 'fr';

  // Find all unique project filenames across all language folders
  const projectFilenames = new Set();
  Object.keys(projectModules).forEach(path => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    projectFilenames.add(filename);
  });

  const projects = [];
  projectFilenames.forEach(filename => {
    const langKey = `../data/${lang}/projects/${filename}`;
    const fallbackKey = `../data/${fallbackLang}/projects/${filename}`;

    const mod = projectModules[langKey] || projectModules[fallbackKey];
    if (mod && (mod.default || mod.project)) {
      projects.push(mod.default || mod.project);
    }
  });

  return projects.sort((a, b) => (a.order || 99) - (b.order || 99));
}

/**
 * Load single project by ID for current language with fallback
 * @param {string} id - Project ID slug
 * @returns {Object|null}
 */
export function loadProjectById(id) {
  const allProjects = loadProjectsData();
  return allProjects.find(p => p.id === id) || null;
}

/**
 * Get the list of supported languages
 */
export function getSupportedLangs() {
  return SUPPORTED_LANGS;
}

/**
 * Render language selector HTML (compact toggle)
 */
export function renderLangSelectorHtml() {
  const current = getCurrentLang();
  return `
    <div class="lang-selector" id="lang-selector">
      ${SUPPORTED_LANGS.map(lang => `
        <button class="lang-btn ${lang === current ? 'lang-btn-active' : ''}" data-lang="${lang}" id="lang-btn-${lang}">
          ${lang.toUpperCase()}
        </button>
      `).join('')}
    </div>
  `;
}

/**
 * Attach language selector event handlers
 * @param {Function} onLangChange - callback triggered with new lang code
 */
export function attachLangSelectorEvents(onLangChange) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.getAttribute('data-lang');
      if (newLang !== getCurrentLang()) {
        setLang(newLang);
        if (onLangChange) onLangChange(newLang);
      }
    });
  });
}
