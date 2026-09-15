export class Router {
  constructor(renderHome, renderProject) {
    this.renderHome = renderHome;
    this.renderProject = renderProject;
    
    // Listen to browser history events (Back / Forward buttons)
    window.addEventListener('popstate', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  navigateTo(path, projectId = null) {
    if (projectId) {
      const url = `#project-${projectId}`;
      window.history.pushState({ projectId }, '', url);
    } else {
      window.history.pushState(null, '', window.location.pathname || './');
    }
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#project-')) {
      const projectId = hash.replace('#project-', '');
      this.renderProject(projectId);
    } else {
      this.renderHome();
    }

    // Défilement automatique forcé vers le haut de la page sans interférence du smooth scroll
    this.scrollToTop();
  }

  scrollToTop() {
    // Désactive temporairement le smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Ré-exécute immédiatement après le rendu du DOM
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }
}
