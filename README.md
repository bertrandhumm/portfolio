# Portfolio — Bertrand Humm

UX Architect & Venture Designer — Senior Product Designer portfolio built with Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Internationalization (i18n)

The site supports **French (FR)** and **English (EN)** with the following architecture:

### How It Works

1. **Language detection**: The site defaults to the browser's language (`navigator.language`). If the browser language is `fr`, the site displays in French; otherwise, it defaults to French as the fallback.
2. **Language persistence**: Once the user selects a language via the toggle, their choice is saved in `localStorage` (`portfolio-lang`) and takes priority on subsequent visits.
3. **Language selector**: A compact `FR / EN` toggle is displayed in the header (home view) and in the navigation bar (project detail view).
4. **Fallback logic**: If data doesn't exist for the selected language, it falls back to whatever language version is available.

### Data Structure

```
src/
├── data/
│   ├── fr/
│   │   ├── ui.js                  ✅ French UI labels
│   │   ├── resume.js              ✅ French CV data
│   │   └── projects/              ✅ French projects
│   │       ├── viamichelin.js
│   │       ├── virtuo-backoffice.js
│   │       ├── virtuo-expert-app.js
│   │       └── slice.js
│   ├── en/
│   │   ├── ui.js                  ✅ English UI labels
│   │   ├── resume.js              ✅ English CV data
│   │   └── projects/              ✅ English projects
│   │       ├── viamichelin.js
│   │       ├── virtuo-backoffice.js
│   │       ├── virtuo-expert-app.js
│   │       └── slice.js
│   └── index.js                   Project loader with fallback
├── js/
│   ├── i18n.js                    Language module (detection, labels, data loading)
│   ├── main.js                    App renderer (uses t() and loadProjectsData())
│   └── router.js                  Hash-based SPA router
```

### UI Labels

UI strings (section titles, buttons, footer text, etc.) are separated into `src/data/fr/ui.js` and `src/data/en/ui.js` and accessed via `t('key')` from `src/js/i18n.js`.

### TODO: Full i18n

The following items are pending for complete bilingual support:

- [x] **Project data translation**: 4 project files translated in `src/data/en/projects/`
- [ ] **Meta tags**: Update `index.html` meta description per language
- [ ] **PDF resume**: Provide both `resume-bertrand-humm-en.pdf` and `resume-bertrand-humm-fr.pdf`
- [ ] **URL-based language**: Consider `/en/` and `/fr/` URL prefixes for SEO

## Tech Stack

- **Vite** — Dev server & build
- **Vanilla JS** — No framework
- **CSS** — Custom properties, responsive design
- **Sharp** — Image processing (`scripts/process-temp-images.js`)

## Media Workflow

To add new images, screenshots, or videos to the portfolio:

1. Drop your raw files (PNG, JPG, WebP, MP4, WebM...) into the `temp/` folder (ignored by Git).
2. Run the optimization script:
   ```bash
   npm run optimize-images
   ```
   *(or `node scripts/process-temp-images.js`)*
3. The script converts images to optimized WebP (width: 1600px max, quality: 82), copies videos, and saves them directly to `public/assets/projects/`.
4. You can safely delete raw files from `temp/` afterwards.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (`localhost:5173`) |
| `npm run build` | Build production bundle in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run optimize-images` | Convert & optimize raw media from `temp/` to `public/assets/projects/` |
