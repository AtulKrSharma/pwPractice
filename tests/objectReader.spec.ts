import { test } from '@playwright/test';
import dummyObject from '../Data/dummyObject.json';

test.describe('dataReader2', () => {
  for (const key in dummyObject)
    test(`Reader for ${key}`, async ({ page }) => {
      console.log(`${key}:${dummyObject[key]}`);
    });
});
