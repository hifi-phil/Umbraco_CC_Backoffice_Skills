import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  // Only run mocked tests - exclude real E2E tests which need a running Umbraco
  testMatch: ['tree-mock-repo.spec.ts', 'tree-msw.spec.ts'],
  timeout: 60000,
  expect: { timeout: 15000 },
  // Run tests serially to avoid state conflicts
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15000,
    // Ensure fresh browser state for each test
    storageState: undefined,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Launch fresh browser context per test file
        launchOptions: {
          args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process'],
        },
      },
    },
  ],
});
