import viamichelin from './fr/projects/viamichelin.js';
import virtuoBackoffice from './fr/projects/virtuo-backoffice.js';
import virtuoExpertApp from './fr/projects/virtuo-expert-app.js';
import slice from './fr/projects/slice.js';

export const PROJECTS = [viamichelin, virtuoBackoffice, virtuoExpertApp, slice]
  .sort((a, b) => (a.order || 99) - (b.order || 99));

export default PROJECTS;
