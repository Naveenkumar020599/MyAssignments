import test, { expect } from '@playwright/test'

test("checkbox", async({page})=>{
    await page.goto("https://leafground.com/checkbox.xhtml")

    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Basic']").click()
    await page.waitForTimeout(3000)

    await page.locator("//span[text()='Ajax']").click()
    

const Message = page.locator("//span[text()='Checked']");
  await expect(Message).toBeVisible();     // ensures message is visible
  await expect(Message).toHaveText('Checked');

    

     await page.locator("//label[text()='Java']").click()
     await page.waitForTimeout(3000)
     await page.locator("//div[@id='j_idt87:ajaxTriState']").click()
     await page.locator("//div[@id='j_idt87:j_idt100']").click()
     await expect(page.locator("//div[@id='j_idt87:j_idt102']//span[@class='ui-chkbox-label ui-state-disabled']")).toBeVisible()
     await page.locator("//ul[@data-label='Cities']").click()
     await page.locator("//li[@data-item-value='Miami']").click()
     await page.locator("//li[@data-item-value='Paris']").click()

}
)