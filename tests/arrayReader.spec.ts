import { test } from '@playwright/test';
import { dummyArray } from '@utils/arrayExporter';

test.describe('dataReader1', () => {
  for (const element of dummyArray) {
    test(`Reader for ${element}`, async () => {
      console.log(element);
    });
  }
});
