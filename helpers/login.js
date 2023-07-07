export async function login(page) {
  await page.waitForSelector('input[type="email"]');
  await page.type('input[type="email"]', process.env.GMAIL_EMAIL);
  await page.click('#identifierNext');
  await page.waitForSelector('input[type="password"]', { visible: true });
  await page.type('input[type="password"]', process.env.GMAIL_PASSWORD);
  await page.click('#passwordNext');
}
