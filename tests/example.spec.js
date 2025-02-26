// tests/example.spec.js
import { test, expect } from '@playwright/test';

test('Homepage should load properly', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Change this URL if needed
  await expect(page).toHaveTitle(/Fashion Hub/i); // Update with the actual title of your site
});
