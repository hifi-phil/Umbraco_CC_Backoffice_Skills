// Entry point for external extension loading (with MSW mocks)
// Run with:
//   VITE_EXTERNAL_EXTENSION=.../tree-example/Client/src \
//   VITE_EXTERNAL_MOCKS=.../tree-example/Client/mocks \
//   npm run dev:external
export { manifests } from './bundle.manifests.js';
