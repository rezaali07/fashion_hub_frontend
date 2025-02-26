import { expect, test } from '@playwright/test';
import crypto from 'crypto';

const BASE_URL = 'http://localhost:3000';
const AVATAR_PATH = 'Z:\\complete web project\\React-CLOTH-EC-MangoDB-master\\frontend_cloth\\src\\Assets\\profile.png';

test.describe('Login and Signup Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/login`);
    });

    test('Login page should load properly', async ({ page }) => {
        await expect(page).toHaveTitle(/Login or Signup/i);
        await expect(page.locator('.loginForm')).toBeVisible();
    });

    test('User can login with valid credentials', async ({ page }) => {
        await page.fill('input[placeholder="Email"]', 'testuser1@gmail.com');
        await page.fill('input[placeholder="Password"]', '123456789');
        await page.click('input[type="submit"]');

        await page.waitForURL(BASE_URL, { timeout: 60000 });
        await expect(page).toHaveURL(BASE_URL);
    });

    test('Error message should appear for incorrect login', async ({ page }) => {
        await page.fill('input[placeholder="Email"]', 'testadmin@gmail.com');
        await page.fill('input[placeholder="Password"]', 'wrongpassword');
        await page.click('input[type="submit"]');

        await expect(page.locator('.Toastify__toast-body')).toHaveText(/Invalid password/i, { timeout: 2000 });

    });

    

    test('Redirects admin users to dashboard', async ({ page }) => {
        await page.fill('input[placeholder="Email"]', 'testadmin@gmail.com');
        await page.fill('input[placeholder="Password"]', '123456789');
        await page.click('input[type="submit"]');

        await page.waitForURL(`${BASE_URL}/dashboard`, { timeout: 60000 });
        await expect(page).toHaveURL(`${BASE_URL}/dashboard`);
    });

});



