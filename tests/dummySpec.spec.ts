import { test, expect } from '@playwright/test';

test.describe('dummy scenarios', () => {
  test('testX-1', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    expect(page.title).toBe('timesNow1');
  });
  test('testX-11', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    expect(page.title).toBe('timesNow11');
  });
  test('testX-111', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    expect(page.title).toBe('timesNow111');
  });

  test('test-2', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    expect(page.title).toBe('timesNow');
  });
});
