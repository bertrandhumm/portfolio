// ----------------------------------------------------
// i18n — Language management module
// Standard ES module imports (GitHub Pages & Native browser compatible)
// ----------------------------------------------------

// FR Data
import { UI as uiFR } from '../data/fr/ui.js';
import { RESUME_DATA as resumeFR } from '../data/fr/resume.js';
import viamichelinFR from '../data/fr/projects/viamichelin.js';
import virtuoBackofficeFR from '../data/fr/projects/virtuo-backoffice.js';
import virtuoExpertAppFR from '../data/fr/projects/virtuo-expert-app.js';
import sliceFR from '../data/fr/projects/slice.js';

// EN Data
import { UI as uiEN } from '../data/en/ui.js';
import { RESUME_DATA as resumeEN } from '../data/en/resume.js';
import viamichelinEN from '../data/en/projects/viamichelin.js';
import virtuoBackofficeEN from '../data/en/projects/virtuo-backoffice.js';
import virtuoExpertAppEN from '../data/en/projects/virtuo-expert-app.js';
import sliceEN from '../data/en/projects/slice.js';

const SUPPORTED_LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'fr';
const STORAGE_KEY = 'portfolio-lang';

const uiData = {
  fr: uiFR,
  en: uiEN
};

const resumeDataMap = {
  fr: resumeFR,
  en: resumeEN
};

const projectsDataMap = {
  fr: [viamichelinFR, virtuoBackofficeFR, virtuoExpertAppFR, sliceFR],
  en: [viamichelinEN, virtuoBackofficeEN, virtuoExpertAppEN, sliceEN]
};

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
  return uiData[lang] || uiData[DEFAULT_LANG] || {};
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
  return resumeDataMap[lang] || resumeDataMap[DEFAULT_LANG] || null;
}

/**
 * Load all projects for current language with fallback
 * @returns {Array} sorted array of project objects
 */
export function loadProjectsData() {
  const lang = getCurrentLang();
  const list = projectsDataMap[lang] || projectsDataMap[DEFAULT_LANG] || [];
  return [...list].sort((a, b) => (a.order || 99) - (b.order || 99));
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
