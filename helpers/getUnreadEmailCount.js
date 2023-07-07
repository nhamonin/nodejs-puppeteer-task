export async function getUnreadEmailCount(page) {
  await page.waitForSelector('[role="navigation"]', { visible: true });
  const navigationDiv = await page.$$('xpath=//div[@role="navigation"]');
  if (navigationDiv.length > 0) {
    const unreadCountElement = await navigationDiv[0].$$(
      'xpath=./div[2]/div/div/div/div/div/div[2]/div/div/div[1]/div[1]/div/div[1]/div/div/div[2]/div'
    );
    if (unreadCountElement.length > 0) {
      const unreadCount = await page.evaluate(
        (el) => el.innerText,
        unreadCountElement[0]
      );
      return unreadCount;
    }
    throw new Error('Unread count element not found');
  }
  throw new Error('Navigation div not found');
}
