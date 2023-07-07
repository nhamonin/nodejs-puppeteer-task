import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import dotenv from 'dotenv';
dotenv.config();

import { GMAIL_URL } from './constants.js';
import {
  login,
  getUnreadEmailCount,
  checkEnvironmentVariables,
} from './helpers/index.js';

puppeteer.use(StealthPlugin());

checkEnvironmentVariables();

const browser = await puppeteer.launch({
  headless: 'new',
});
const [page] = await browser.pages();

await page.goto(GMAIL_URL);
// click on the sign in button
await page.waitForSelector('[data-action="sign in"]');
await page.click('[data-action="sign in"]');

try {
  await login(page);
  const unreadCount = await getUnreadEmailCount(page);
  console.log(`You have ${unreadCount} unread emails.`);
} catch (error) {
  console.error(error);
}

await browser.close();
