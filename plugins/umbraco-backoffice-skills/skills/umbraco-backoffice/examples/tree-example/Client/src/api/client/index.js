// ESM wrapper for hey-api client (CommonJS)
// This file allows Vite to import the CommonJS client as ESM
import cjs from './index.cjs';

export const {
  createClient,
  createConfig,
  formDataBodySerializer,
  jsonBodySerializer,
  urlSearchParamsBodySerializer,
} = cjs;

export default cjs;
