const puppeteer = require('C:\\Users\\Administrator\\node_modules\\puppeteer-core');
const path = require('path');

async function main() {
  const wsUrl = process.env.AGY_BROWSER_WS_URL;
  if (!wsUrl) {
    console.error('AGY_BROWSER_WS_URL environment variable is not set!');
    process.exit(1);
  }
  
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsUrl,
      defaultViewport: null
    });
    
    const pages = await browser.pages();
    if (pages.length === 0) {
      console.error('No pages found');
      await browser.disconnect();
      return;
    }
    const page = pages[0];
    
    // --- 1. Desktop Viewport Screenshot ---
    await page.setViewport({ width: 1280, height: 900 });
    console.log('Navigating to http://localhost:8000...');
    await page.goto('http://localhost:8000', { waitUntil: 'networkidle2' });
    
    // Close the exit modal if open, wait a bit
    await page.evaluate(() => {
      const modal = document.getElementById('exitModal');
      if (modal) modal.classList.remove('show');
    });
    await new Promise(r => setTimeout(r, 1000));
    
    const desktopPath = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\3b0f7175-a04e-4cfe-86bc-a1cd53c1ceba\\desktop_view.png';
    await page.screenshot({ path: desktopPath });
    console.log('Desktop view screenshot saved to:', desktopPath);

    // --- 2. Mobile Viewport Screenshot (Primary Target) ---
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    // Reload page to re-trigger layout calculations
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1000));
    
    const mobilePath = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\3b0f7175-a04e-4cfe-86bc-a1cd53c1ceba\\mobile_view.png';
    await page.screenshot({ path: mobilePath });
    console.log('Mobile view screenshot saved to:', mobilePath);
    
    await browser.disconnect();
    console.log('Screenshots taken successfully!');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  }
}

main();
