import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const STORAGE_STATE = join(__dirname, '.auth/user.json');

/**
 * Playwright config for real E2E tests against a running Umbraco instance.
 */
export default defineConfig({
  testDir: '.',
  testMatch: ['tree-e2e.spec.ts'],
  timeout: 60000,
  expect: { timeout: 15000 },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? 'line' : 'html',
  use: {
    baseURL: process.env.URL || 'https://localhost:44325',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    testIdAttribute: 'data-mark',
  },
  projects: [
    {
      name: 'setup',
      testMatch: 'auth.setup.ts',
    },
    {
      name: 'e2e',
      testMatch: 'tree-e2e.spec.ts',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        ignoreHTTPSErrors: true,
        storageState: STORAGE_STATE,
      },
    },
  ],
});
