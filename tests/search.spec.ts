import { test, expect } from '@playwright/test';

test('Test trivago site search', async ({ page }) => {
  await page.goto('http://www.trivago.com.br');

  await expect(page).toHaveTitle(/trivago/);

  const searchInput = page.locator('[data-testid="search-form-destination"]');

  await searchInput.fill('Manaus');

  const searchButton = page.locator('[data-testid="search-button"]');
  
  await searchButton.click();
  await searchButton.click();

  const form = page.locator('#sorting-selector');
  await form.click();

  const formOption = page.locator('#sorting-selector > option:nth-child(2)');
  await formOption.type('Avaliação e sugestões');
  await page.mouse.click(1, 1, );

  
  const item = page.locator('#__next > div.min-w-screen-3xs.text-grey-900 > main > div.relative > section > div > ol > li:nth-child(1) > div > article > div.flex.flex-grow-1.justify-between.accomodation-item_infoSection__jtzM6.flex-1 > div.px-2.w-1\/2.flex-1.mt-2.mb-3.px-3 > section > h2 > button > span');
  await item.type('Hotel Intercity Manaus');

  const avaliation = page.locator('#__next > div.min-w-screen-3xs.text-grey-900 > main > div.relative > section > div > ol > li:nth-child(1) > div > article > div.flex.flex-grow-1.justify-between.accomodation-item_infoSection__jtzM6.flex-1 > div.px-2.w-1\/2.flex-1.mt-2.mb-3.px-3 > div.cursor-pointer.hover\:bg-grey-200.pl-2.py-2.mb-1 > button > span.overflow-hidden.truncate.w-11\/12 > span > span.mt-px.truncate > strong')
  await avaliation.type('Excelente');

  const value = page.locator('#__next > div.min-w-screen-3xs.text-grey-900 > main > div.relative > section > div > ol > li:nth-child(1) > div > article > div.flex.flex-grow-1.justify-between.accomodation-item_infoSection__jtzM6.flex-1 > div.flex.flex-col.justify-between.p-2.accomodation-item_clickoutSectionWide__xfY_C.accomodation-item_clickoutSectionFull__g4IX6.w-1\/2.w-2\/5.pl-3 > div:nth-child(2) > div > div > div > div.flex-col.text-right.flex-none > strong > span')
  await value.type('R$262');

});