import test, { expect } from'@playwright/test'

test("radiobutton", async({page})=>{

    await page.goto("https://leafground.com/radio.xhtml")
    await expect(page.getByLabel('Safari').nth(1)).toBeChecked();
    await expect(page.getByLabel('21-40 Years')).toBeChecked()
    await page.locator("//label[text() ='Chrome']").first().click()
    await page.locator("//label[text() ='Hyderabad']").click()
    await page.locator("//label[text() ='1-20 Years']").click()


}    
)