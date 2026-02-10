import test, { expect } from'@playwright/test'

test("await", async({page})=>{
await page.goto("https://leafground.com/waits.xhtml")
await page.locator("//button[@id='j_idt87:j_idt89']").click()
await expect (page.locator("//button[@id='j_idt87:j_idt90']")).toBeVisible()
await page.locator("//button[@id='j_idt87:j_idt92']").click()
await page.waitForTimeout(5000)
await expect (page.locator("//button[@id='j_idt87:j_idt93']")).toBeHidden()
await expect (page.locator("//button[@id='j_idt87:j_idt95']")).toBeEnabled()
await page.locator("//button[@id='j_idt87:j_idt95']").click()
await page.locator("//button[@id='j_idt87:j_idt96']").click()
await page.locator("//button[@id='j_idt87:j_idt98']").click()
await page.waitForTimeout(6000)
await expect (page.locator("//button[@id='j_idt87:j_idt99']")).toBeVisible()
await page.waitForTimeout(3000)
await page.close()

}
)