/**
 * Tests using MSW handlers approach.
 *
 * Run the dev server with:
 *   VITE_EXTERNAL_EXTENSION=.../Client/src \
 *   VITE_EXTERNAL_MOCKS=.../Client/mocks \
 *   npm run dev:external
 *
 * This approach intercepts HTTP requests at the network level.
 */
import { test, expect, type Page } from '@playwright/test';

async function navigateToSettings(page: Page) {
  await page.goto('/section/settings');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('umb-section-sidebar', { timeout: 30000 });
}

async function waitForTree(page: Page) {
  await page.waitForSelector('text=Our Tree', { timeout: 15000 });
}

test.describe('Our Tree Extension (MSW Handlers)', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToSettings(page);
    await waitForTree(page);
  });

  test('should display Our Tree menu in Settings sidebar', async ({ page }) => {
    const menuItem = page.locator('umb-section-sidebar').getByText('Our Tree');
    await expect(menuItem).toBeVisible({ timeout: 15000 });
  });

  test('should display root tree items from MSW mock data', async ({ page }) => {
    // These names come from mocks/handlers.ts mock data
    await expect(page.getByText('Settings Group A')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Settings Group B')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Configuration')).toBeVisible({ timeout: 15000 });
  });

  test('should expand tree item to show children', async ({ page }) => {
    const treeItem = page.locator('umb-tree-item').filter({ hasText: 'Settings Group A' });
    const expandButton = treeItem.locator('uui-symbol-expand');

    if (await expandButton.isVisible()) {
      await expandButton.click();
      await expect(page.getByText('Setting A1')).toBeVisible({ timeout: 15000 });
      await expect(page.getByText('Setting A2')).toBeVisible({ timeout: 15000 });
    }
  });

  test('should navigate to workspace when clicking tree item', async ({ page }) => {
    const configItem = page.getByText('Configuration');
    await configItem.click();

    await page.waitForSelector('our-tree-workspace-editor', { timeout: 15000 });

    // Workspace context formats name as "Tree Item {unique}" - see ourtree-workspace.context.ts
    // Check the header specifically (there's also the name in the details view)
    const header = page.locator('our-tree-workspace-editor #header');
    await expect(header.getByText('Tree Item config')).toBeVisible({ timeout: 15000 });
  });

  test('should display correct icon in workspace header', async ({ page }) => {
    const settingsGroupA = page.getByText('Settings Group A');
    await settingsGroupA.click();

    await page.waitForSelector('our-tree-workspace-editor', { timeout: 15000 });

    // Check for icon in the header specifically
    const header = page.locator('our-tree-workspace-editor #header');
    const icon = header.locator('uui-icon');
    await expect(icon).toBeVisible({ timeout: 15000 });
  });

  test('should show Details view content in workspace', async ({ page }) => {
    const configItem = page.getByText('Configuration');
    await configItem.click();

    await page.waitForSelector('our-tree-workspace-editor', { timeout: 15000 });

    // The workspace view shows "Tree Item Details" box with item properties
    await expect(page.getByText('Tree Item Details')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Name')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('ID')).toBeVisible({ timeout: 15000 });
  });
});
