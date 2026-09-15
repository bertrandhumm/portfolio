// Charge dynamiquement tous les fichiers de projets dans src/data/*/projects/*.js
const projectModules = import.meta.glob('./*/projects/*.js', { eager: true });

// Récupère les exports par défaut uniques par nom de fichier
const projectsMap = new Map();
Object.entries(projectModules).forEach(([path, module]) => {
  const filename = path.split('/').pop();
  if (!projectsMap.has(filename) && (module.default || module.project)) {
    projectsMap.set(filename, module.default || module.project);
  }
});

export const PROJECTS = Array.from(projectsMap.values())
  .sort((a, b) => (a.order || 99) - (b.order || 99));

export default PROJECTS;
