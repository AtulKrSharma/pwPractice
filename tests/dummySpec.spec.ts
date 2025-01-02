import { test, expect } from '@playwright/test';

test.describe('dummy scenarios', () => {
  test('test-1', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    page.setDefaultTimeout(10000);
    expect(page.title).toBe('timesNow');
    page.setDefaultTimeout(10000);
  });
});
