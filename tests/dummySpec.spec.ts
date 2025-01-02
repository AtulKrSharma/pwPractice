import { test, expect } from '@playwright/test';

test.describe('dummy scenarios', () => {
  test('test-1', async ({ page }) => {
    await page.goto('https://www.timesnownews.com/');
    expect(page.title).toBe('timesNow');
  });
});
