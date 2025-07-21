import {expect} from "@playwright/test";
import {test } from "./auto-fixture";
test.use({baseURL:'https://www.google.com'})

test('auto fixture', async ({ page,baseURL,customName,customAge},testInfo) => {
   console.log(customName,customAge);
    await page.goto(baseURL as string);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});