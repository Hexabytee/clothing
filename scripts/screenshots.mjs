import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const screenshotsDir = join(__dirname, '..', 'docs', 'screenshots');

const BASE_URL = 'http://localhost:3000';

const pages = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/#deal-of-the-day' },
  { name: 'blog', path: '/#blog' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });

  for (const page of pages) {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const tab = await context.newPage();

      try {
        await tab.goto(`${BASE_URL}${page.path}`, {
          waitUntil: 'networkidle',
          timeout: 15000,
        });

        // Wait for fonts and images
        await tab.waitForTimeout(2000);

        // Dismiss newsletter modal if present
        try {
          const closeBtn = tab.locator('[data-modal-close]');
          if (await closeBtn.isVisible({ timeout: 1000 })) {
            await closeBtn.click();
            await tab.waitForTimeout(500);
          }
        } catch {
          // Modal not present, continue
        }

        // Dismiss toast if present
        try {
          const toastClose = tab.locator('[data-toast-close]');
          if (await toastClose.isVisible({ timeout: 500 })) {
            await toastClose.click();
            await tab.waitForTimeout(300);
          }
        } catch {
          // Toast not present, continue
        }

        const filename = `${page.name}-${viewport.name}.png`;
        const filepath = join(screenshotsDir, filename);

        await tab.screenshot({ path: filepath, fullPage: false });
        console.log(`Captured: ${filename}`);
      } catch (err) {
        console.error(`Failed to capture ${page.name}-${viewport.name}: ${err.message}`);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();
  console.log(`\nScreenshots saved to ${screenshotsDir}`);
}

captureScreenshots();
