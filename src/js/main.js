import { getCurrentLang, setLang, t, loadResumeData, loadProjectsData, loadProjectById, renderLangSelectorHtml, attachLangSelectorEvents } from './i18n.js';
import { Router } from './router.js';

const appElement = document.getElementById('app');
const toastElement = document.getElementById('copy-toast');
const lightboxEl = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxLabel = document.getElementById('lightbox-label');
const lightboxCounter = document.getElementById('lightbox-counter');

let router;
let resumeData = null; // loaded asynchronously

// Lightbox state
let lbImages = [];   // [{ src, label }]
let lbIndex = 0;

function isVideoSrc(src) {
  return typeof src === 'string' && (src.endsWith('.webm') || src.endsWith('.mp4'));
}

function renderMediaTag(src, alt = '', className = '', fitClass = '') {
  if (isVideoSrc(src)) {
    return `<video src="${src}" class="${className} ${fitClass}" autoplay loop muted playsinline disablepictureinpicture aria-label="${alt}"></video>`;
  }
  return `<img src="${src}" alt="${alt}" class="${className} ${fitClass}" loading="lazy" />`;
}

function initApp() {
  // Set html lang attribute
  document.documentElement.lang = getCurrentLang();
  // Load resume data for current language
  resumeData = loadResumeData();
  router = new Router(renderHomeView, renderProjectView);
  router.init();
  setupGlobalEvents();
}

/**
 * Reload entire app when language changes
 */
function onLangChange(newLang) {
  document.documentElement.lang = newLang;
  resumeData = loadResumeData();
  router.handleRoute();
}

// ----------------------------------------------------
// CURRICULUM VITAE COMPONENT RENDERER
// ----------------------------------------------------
function renderCvSectionHtml() {
  if (!resumeData) return '';

  const experiencesHtml = resumeData.experiences.map((exp, index) => {
    const isHidden = index >= 3;
    const bulletsHtml = (exp.highlights || []).map(h => `<li>${h}</li>`).join('');
    return `
      <div class="cv-entry ${isHidden ? 'cv-item-hidden' : ''}" data-category="exp">
        <div class="cv-entry-header">
          <div>
            <span class="cv-entry-title">${exp.role}</span>
            <span class="cv-entry-company"> — ${exp.company}</span>
            ${exp.type ? `<span class="cv-entry-type">${exp.type}</span>` : ''}
          </div>
          <span class="cv-entry-period">${exp.period}</span>
        </div>
        ${bulletsHtml ? `<ul class="cv-entry-bullets">${bulletsHtml}</ul>` : ''}
      </div>
    `;
  }).join('');

  const educationHtml = resumeData.education.map((edu, index) => {
    const isHidden = index >= 3;
    return `
      <div class="cv-entry ${isHidden ? 'cv-item-hidden' : ''}" data-category="edu">
        <div class="cv-entry-header">
          <div>
            <span class="cv-entry-title">${edu.school}</span>
            <span class="cv-entry-company"> — ${edu.degree}</span>
          </div>
          <span class="cv-entry-period">${edu.period}</span>
        </div>
        ${edu.details ? `<div style="font-size: 0.88rem; color: var(--text-muted);">${edu.details}</div>` : ''}
      </div>
    `;
  }).join('');

  const languagesHtml = resumeData.languages.map((lang, index) => {
    const isHidden = index >= 3;
    return `
      <div class="cv-entry ${isHidden ? 'cv-item-hidden' : ''}" data-category="lang">
        <div class="cv-entry-header">
          <div>
            <span class="cv-entry-title">${lang.name}</span>
            <span class="cv-entry-company"> — ${lang.level}</span>
          </div>
          ${lang.detail ? `<span class="cv-entry-period">${lang.detail}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="cv-section" id="curriculum-vitae">
      <div class="container">
        <!-- PRINT ONLY HEADER -->
        <div class="cv-print-header">
          <h1 class="cv-print-name">Bertrand Humm</h1>
          <p class="cv-print-role">UX Architect &amp; Venture Designer</p>
          <p class="cv-print-contact">bertrandhumm.work@gmail.com - 06 65 53 04 88</p>
        </div>

        <div class="cv-header-row">
          <div class="cv-title-group">
            <h2 class="section-title" style="margin-bottom: 0;">${t('cvTitle')}</h2>
          </div>
          <button type="button" class="cv-download-btn" id="download-cv-btn" aria-label="${t('downloadPdf')}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>${t('downloadPdf')}</span>
          </button>
        </div>

        <!-- PORTFOLIO (PRINT ONLY) -->
        <div class="cv-category cv-print-only">
          <h3 class="cv-category-title">Portfolio</h3>
          <div class="cv-portfolio-link">
            <a href="https://bertrandhumm.github.io/portfolio" target="_blank" rel="noopener noreferrer">https://bertrandhumm.github.io/portfolio</a>
          </div>
        </div>

        <!-- SKILLS -->
        <div class="cv-category">
          <h3 class="cv-category-title">${t('skillsTitle')}</h3>
          <div class="cv-skills-tags">
            ${resumeData.skills.map(s => `<span class="cv-skill-tag">${s}</span>`).join('')}
          </div>
        </div>

        <!-- EXPERIENCES -->
        <div class="cv-category">
          <h3 class="cv-category-title">${t('experiencesTitle')}</h3>
          <div class="cv-timeline" id="cv-exp-list">
            ${experiencesHtml}
          </div>
          ${resumeData.experiences.length > 3 ? `
            <button class="cv-toggle-btn" data-target="exp" id="toggle-exp-btn">
              ${t('showMoreExperiences', resumeData.experiences.length - 3)}
            </button>
          ` : ''}
        </div>

        <!-- EDUCATION -->
        <div class="cv-category">
          <h3 class="cv-category-title">${t('educationTitle')}</h3>
          <div class="cv-timeline" id="cv-edu-list">
            ${educationHtml}
          </div>
          ${resumeData.education.length > 3 ? `
            <button class="cv-toggle-btn" data-target="edu" id="toggle-edu-btn">
              ${t('showMoreGeneric')}
            </button>
          ` : ''}
        </div>

        <!-- LANGUAGES -->
        <div class="cv-category">
          <h3 class="cv-category-title">${t('languagesTitle')}</h3>
          <div class="cv-timeline" id="cv-lang-list">
            ${languagesHtml}
          </div>
          ${resumeData.languages.length > 3 ? `
            <button class="cv-toggle-btn" data-target="lang" id="toggle-lang-btn">
              ${t('showMoreGeneric')}
            </button>
          ` : ''}
        </div>
      </div>
    </section>
  `;
}

// ----------------------------------------------------
// HOME VIEW RENDERER
// ----------------------------------------------------
function renderHomeView() {
  document.title = t('pageTitle');
  const projects = loadProjectsData();

  const projectsGridHtml = projects.map(project => {
    const thumbSrc = project.thumbnail || (project.heroImage && project.heroImage.src ? project.heroImage.src : null);

    return `
    <article class="project-card" data-project-id="${project.id}" role="button" tabindex="0">
      <div class="card-thumbnail-container">
        ${thumbSrc ? `
          <img src="${thumbSrc}" alt="${project.title}" class="card-thumbnail-img" loading="lazy" />
        ` : `
          <div class="card-thumbnail-placeholder">
            <span class="placeholder-tag">${project.tags[0] || 'Case Study'}</span>
            <div style="font-weight: 700; color: #333; font-size: 1.1rem; text-align: center;">${project.title}</div>
          </div>
        `}
      </div>
      <div class="card-info">
        <div class="card-header-row">
          <h2 class="card-title">${project.title}</h2>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="card-description">${project.description}</p>
        <div class="card-tags">
          ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `}).join('');

  appElement.innerHTML = `
    <!-- HEADER -->
    <header class="site-header">
      <div class="container">
        <div class="header-top-bar">
          <img src="assets/projects/bertrandhummsquare.webp" alt="Bertrand Humm" class="avatar-img" />
          ${renderLangSelectorHtml()}
        </div>
        <div class="header-text">
          <h1 class="designer-name">Bertrand Humm</h1>
          <p class="designer-bio">
            ${t('designerBio')}
          </p>
          <div class="status-badge">
            <span class="status-dot"></span>
            ${t('statusAvailable')}
          </div>
        </div>
      </div>
    </header>

    <!-- CASE STUDIES SECTION -->
    <main class="case-studies-section">
      <div class="container">
        <div class="section-title">${t('selectedProjects')}</div>
        <div class="projects-grid">
          ${projectsGridHtml}
        </div>
      </div>
    </main>

    <!-- CURRICULUM VITAE SECTION -->
    ${renderCvSectionHtml()}

    <!-- FOOTER -->
    ${renderFooterHtml()}
  `;

  // Attach card click handlers
  document.querySelectorAll('.project-card').forEach(card => {
    const pId = card.getAttribute('data-project-id');
    card.addEventListener('click', () => router.navigateTo(null, pId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        router.navigateTo(null, pId);
      }
    });
  });

  // Attach CV toggle handlers (Voir plus / Voir moins)
  document.querySelectorAll('.cv-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-target');
      const hiddenItems = document.querySelectorAll(`.cv-entry[data-category="${targetCat}"].cv-item-hidden`);
      const isExpanded = btn.getAttribute('data-expanded') === 'true';

      if (!isExpanded) {
        hiddenItems.forEach(item => item.classList.remove('cv-item-hidden'));
        btn.textContent = t('showLess');
        btn.setAttribute('data-expanded', 'true');
      } else {
        const allItems = document.querySelectorAll(`.cv-entry[data-category="${targetCat}"]`);
        allItems.forEach((item, idx) => {
          if (idx >= 3) item.classList.add('cv-item-hidden');
        });
        const remaining = allItems.length - 3;
        btn.textContent = t('showMoreItems', remaining);
        btn.setAttribute('data-expanded', 'false');
      }
    });
  });

  // Attach Download PDF handler (direct download if PDF exists, otherwise browser print dialog)
  const downloadPdfBtn = document.getElementById('download-cv-btn');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('assets/resume-bertrand-humm.pdf', { method: 'HEAD' });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('pdf')) {
          const link = document.createElement('a');
          link.href = 'assets/resume-bertrand-humm.pdf';
          link.download = 'Resume-Bertrand-Humm.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }
      } catch (err) {
        // Fallback to browser print/save-as-PDF
      }
      window.print();
    });
  }

  // Attach language selector events
  attachLangSelectorEvents(onLangChange);

  attachFooterEvents();
}

// ----------------------------------------------------
// PROJECT DETAIL VIEW RENDERER (CENTRALIZED LOGIC)
// ----------------------------------------------------
function renderProjectView(projectId) {
  const allProjects = loadProjectsData();
  const project = loadProjectById(projectId) || allProjects[0];
  document.title = `${project.title} — Case Study`;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProjectIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextProjectIndex];

  // Render Hero Image if present (Optional)
  let heroImageHtml = '';
  if (project.heroImage) {
    if (project.heroImage.src) {
      heroImageHtml = `
        <div class="project-hero-media">
          <img src="${project.heroImage.src}" alt="${project.heroImage.label || project.title}" class="hero-img" loading="eager" />
        </div>
      `;
    } else {
      heroImageHtml = `
        <div class="media-frame media-frame-hero">
          <span class="frame-label">${project.heroImage.label || 'Emplacement Visuel Principal'}</span>
          ${project.heroImage.sub ? `<span class="frame-sub">${project.heroImage.sub}</span>` : ''}
        </div>
      `;
    }
  }

  // Centralized renderer for dynamic sections
  const sectionsHtml = (project.sections || []).map(section => renderSection(section)).join('');

  appElement.innerHTML = `
    <div class="project-detail-view">
      <div class="container">
        <!-- Back Navigation Bar -->
        <nav class="project-nav-bar">
          <button class="back-btn" id="back-to-home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${t('backToProjects')}
          </button>
          ${renderLangSelectorHtml()}
        </nav>

        <!-- Project Hero Header -->
        <header class="project-hero">
          <div class="project-category-tag">${project.tags.join(' • ')}</div>
          <h1 class="project-hero-title">${project.title}</h1>
          <p class="project-hero-subtitle">${project.description || project.subtitle}</p>

          <!-- Meta Grid -->
          <div class="project-meta-grid">
            <div>
              <div class="meta-item-label">${t('roleLabel')}</div>
              <div class="meta-item-value">${project.role}</div>
            </div>
            <div>
              <div class="meta-item-label">${t('yearLabel')}</div>
              <div class="meta-item-value">${project.year}</div>
            </div>
            <div>
              <div class="meta-item-label">${t('impactLabel')}</div>
              <div class="meta-item-value">${project.impact}</div>
            </div>
          </div>

          ${heroImageHtml}
        </header>

        <!-- Dynamic Sections Body -->
        <main class="project-content-body">
          ${sectionsHtml}

          <!-- Next Project Navigation Footer -->
          <div class="next-project-bar" id="next-project-btn" data-next-id="${nextProject.id}">
            <div>
              <div class="next-label">${t('nextProject')}</div>
              <div class="next-title">${nextProject.title} →</div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- FOOTER -->
    ${renderFooterHtml()}
  `;

  // Back button event
  document.getElementById('back-to-home').addEventListener('click', () => {
    router.navigateTo('/', null);
  });

  // Next project event
  document.getElementById('next-project-btn').addEventListener('click', () => {
    router.navigateTo(null, nextProject.id);
  });

  // Attach language selector events
  attachLangSelectorEvents(onLangChange);

  attachFooterEvents();
  attachLightboxHandlers(project);
}


// ----------------------------------------------------
// LIGHTBOX
// ----------------------------------------------------
function collectProjectImages(project) {
  const images = [];

  // Hero image
  if (project.heroImage?.src) {
    images.push({ src: project.heroImage.src, label: project.heroImage.label || project.title });
  }

  // Walk all sections
  for (const section of project.sections || []) {
    if (section.type === 'principles') {
      for (const item of section.items || []) {
        const imgList = item.images ? item.images : (item.image ? [item.image] : []);
        for (const img of imgList) {
          if (img?.src) images.push({ src: img.src, label: img.label || item.title });
        }
      }
    }
    if (section.type === 'bento' || section.type === 'gallery') {
      for (const img of section.images || []) {
        if (img?.src) images.push({ src: img.src, label: img.label || '' });
      }
    }
  }
  return images;
}

function openLightbox(images, index) {
  lbImages = images;
  lbIndex = index;
  updateLightboxSlide();
  lightboxEl.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxEl.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  updateLightboxSlide();
}

function updateLightboxSlide() {
  const media = lbImages[lbIndex];
  const isVid = isVideoSrc(media.src);

  const activeEl = isVid ? lightboxVideo : lightboxImg;
  const inactiveEl = isVid ? lightboxImg : lightboxVideo;

  inactiveEl.style.display = 'none';
  inactiveEl.src = '';

  activeEl.style.opacity = '0';
  activeEl.style.transform = 'scale(0.97)';
  activeEl.style.display = 'block';

  setTimeout(() => {
    activeEl.src = media.src;
    if (isVid) {
      activeEl.play().catch(() => {});
    } else {
      activeEl.alt = media.label || '';
    }
    lightboxLabel.textContent = media.label || '';
    lightboxCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    document.getElementById('lightbox-prev').disabled = lbImages.length <= 1;
    document.getElementById('lightbox-next').disabled = lbImages.length <= 1;
    activeEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    activeEl.style.opacity = '1';
    activeEl.style.transform = 'scale(1)';
  }, 80);
}

function attachLightboxHandlers(project) {
  const images = collectProjectImages(project);
  if (images.length === 0) return;

  // Attach click on every rendered image or video that has a matching src
  document.querySelectorAll('.principle-bento-img, .bento-img, .hero-img, .principle-portrait-img').forEach(mediaEl => {
    mediaEl.style.cursor = 'zoom-in';
    mediaEl.addEventListener('click', () => {
      const src = mediaEl.getAttribute('src');
      const idx = images.findIndex(i => i.src === src || mediaEl.src.endsWith(i.src));
      openLightbox(images, idx >= 0 ? idx : 0);
    });
  });

  // Lightbox controls (safe to re-attach each time)
  document.getElementById('lightbox-close').onclick = closeLightbox;
  document.getElementById('lightbox-prev').onclick = () => navigateLightbox(-1);
  document.getElementById('lightbox-next').onclick = () => navigateLightbox(1);

  // Click on backdrop closes
  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });
}

// ----------------------------------------------------
// CENTRALIZED SECTION RENDERER ENGINE
// ----------------------------------------------------
function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p class="project-text-paragraph">')
    .replace(/\n/g, '<br>');
}

function renderSection(section) {
  if (!section) return '';

  switch (section.type) {
    case 'text':
      return `
        <section class="project-section">
          ${section.title ? `<h2 class="section-heading">${section.title}</h2>` : ''}
          <p class="project-text-paragraph">${formatMarkdown(section.content)}</p>
        </section>
      `;

    case 'principles':
      const principlesItemsHtml = (section.items || []).map(p => {
        // Normalize: accept both `image` (single) and `images` (array)
        const imgList = p.images ? p.images : (p.image ? [p.image] : []);

        let imageHtml = '';
        if (imgList.length > 0) {
          const cols = Math.min(imgList.length, 3);
          const gridClass = `principle-bento-grid-${cols}`;
          const itemsHtml = imgList.map(img => {
            if (img && img.src) {
              const fitClass = img.fit === 'contain' ? 'img-contain' : '';
              return `
                <div class="principle-bento-item ${fitClass ? 'principle-bento-contain' : ''}">
                  ${renderMediaTag(img.src, img.label || p.title, 'principle-bento-img', fitClass)}
                  ${img.label ? `<span class="img-caption-overlay">${img.label}</span>` : ''}
                </div>
              `;
            }
            return `
              <div class="principle-bento-item principle-bento-placeholder">
                <span class="frame-label">${img?.label || 'Visuel'}</span>
                ${img?.sub ? `<span class="frame-sub">${img.sub}</span>` : ''}
              </div>
            `;
          }).join('');

          imageHtml = `<div class="principle-bento-grid ${gridClass}">${itemsHtml}</div>`;
        }

        if (p.layout === 'split') {
          return `
            <div class="principle-card principle-card-split">
              <div class="principle-split-content">
                <div class="principle-header">
                  <span class="principle-number">${p.num}</span>
                  <h3 class="principle-title">${p.title}</h3>
                </div>
                <p class="principle-text">${formatMarkdown(p.description)}</p>
              </div>
              <div class="principle-split-media">
                ${imgList.map(img => img?.src ? `
                  <div class="principle-portrait-wrapper">
                    ${renderMediaTag(img.src, img.label || p.title, 'principle-portrait-img')}
                    ${img.label ? `<span class="img-caption-overlay">${img.label}</span>` : ''}
                  </div>
                ` : '').join('')}
              </div>
            </div>
          `;
        }

        return `
          <div class="principle-card">
            <div class="principle-header">
              <span class="principle-number">${p.num}</span>
              <h3 class="principle-title">${p.title}</h3>
            </div>
            <p class="principle-text">${formatMarkdown(p.description)}</p>
            ${imageHtml}
          </div>
        `;
      }).join('');

      return `
        <section class="project-section">
          ${section.title ? `<h2 class="section-heading">${section.title}</h2>` : ''}
          <div class="principles-list">
            ${principlesItemsHtml}
          </div>
        </section>
      `;

    case 'bento':
    case 'gallery':
      const imageCount = section.images?.length || 1;
      const bentoClass = `bento-grid-${Math.min(imageCount, 3)}`;

      const bentoItemsHtml = (section.images || []).map((img, i) => {
        if (typeof img === 'object' && img.src) {
          return `
            <div class="bento-item bento-item-media">
              ${renderMediaTag(img.src, img.label || `Visuel ${i + 1}`, 'bento-img')}
              ${img.label ? `<span class="img-caption-overlay">${img.label}</span>` : ''}
            </div>
          `;
        }
        return `
          <div class="bento-item">
            <span class="frame-label">${typeof img === 'string' ? img : (img.label || `Visuel ${i + 1}`)}</span>
            ${img.sub ? `<span class="frame-sub">${img.sub}</span>` : ''}
          </div>
        `;
      }).join('');

      return `
        <section class="project-section bento-section">
          ${section.title ? `<h2 class="section-heading">${section.title}</h2>` : ''}
          ${section.content ? `<p class="project-text-paragraph">${formatMarkdown(section.content)}</p>` : ''}
          <div class="bento-grid ${bentoClass}">
            ${bentoItemsHtml}
          </div>
        </section>
      `;

    case 'results':
      const resultsItemsHtml = (section.items || []).map(r => `
        <div class="result-card">
          <div class="result-card-highlight">${r.highlight}</div>
          <div class="result-card-text">${r.text}</div>
        </div>
      `).join('');

      return `
        <section class="project-section">
          ${section.title ? `<h2 class="section-heading">${section.title}</h2>` : ''}
          <div class="results-grid">
            ${resultsItemsHtml}
          </div>
        </section>
      `;

    case 'reflection':
      return `
        <section class="project-section">
          <div class="reflection-box">
            ${section.title ? `<h3 class="reflection-title">${section.title}</h3>` : ''}
            <p class="reflection-text">${formatMarkdown(section.content)}</p>
          </div>
        </section>
      `;

    default:
      return '';
  }
}

// ----------------------------------------------------
// FOOTER TEMPLATE & EVENTS
// ----------------------------------------------------
function renderFooterHtml() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-top">
            <div>
              <h2 class="footer-heading">${t('footerHeading')}</h2>
              <p class="footer-sub">${t('footerSub')}</p>
            </div>
            <button class="email-copy-btn" id="copy-email-btn" data-email="bertrandhumm.work@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>${t('copyEmail')}</span>
            </button>
          </div>

          <div class="footer-bottom">
            <div class="footer-links">
              <a href="https://linkedin.com/in/bertrandhumm" target="_blank" rel="noopener noreferrer" class="footer-link">
                LinkedIn ↗
              </a>
              <a href="https://thesliceapp.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                Slice ↗
              </a>
            </div>
            <div>© ${new Date().getFullYear()} Bertrand Humm. ${t('allRightsReserved')}</div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function attachFooterEvents() {
  const emailBtn = document.getElementById('copy-email-btn');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      const email = emailBtn.getAttribute('data-email') || "bertrandhumm.work@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast(t('emailCopied'));
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  }
}

function showToast(message) {
  if (!toastElement) return;
  toastElement.textContent = message;
  toastElement.classList.add('active');
  setTimeout(() => {
    toastElement.classList.remove('active');
  }, 2800);
}

function setupGlobalEvents() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!lightboxEl.hasAttribute('hidden')) { closeLightbox(); return; }
      if (window.location.hash.startsWith('#project-')) router.navigateTo('/', null);
    }
    if (!lightboxEl.hasAttribute('hidden')) {
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);
