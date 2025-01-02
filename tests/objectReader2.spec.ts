import { test } from '@playwright/test';
import myArrayOfObjects from '../Data/myArrayOfObjects.json';

test.describe('dataReader31', () => {
  myArrayOfObjects.forEach((data) => {
    test(`Test for ${data.name}`, async () => {
      console.log(data.name);
      console.log(data.age);
      console.log(data.role);
    });
  });
});
