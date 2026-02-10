import test,{expect} from '@playwright/test'

test('testcase',async({page})=>{
    await page.goto("https://login.salesforce.com")

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill("TestLeaf@2025")
await page.locator('//input[@id="Login"]').click()

await page.locator(".slds-icon-waffle").click()

await page.getByPlaceholder("Search apps and items...").fill("Sales")

await page.locator('//span[text()="Opportunities"]').click()

await page.getByRole("button",{name:'New',exact:true}).click()

await page.getByRole('textbox',{name:'Opportunity Name'}).fill("Naveen") 

await page.getByPlaceholder("Search Accounts...").click()

await page.locator("(//span[@class='slds-listbox__option-text slds-listbox__option-text_entity']/span)[1]").click()

await page.locator("//div[@class='slds-form-element__control slds-input-has-icon slds-input-has-icon_right']/input").click() // Click Close Date

await page.getByRole('button', {name: 'Today'}).click()

await page.locator("(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])[1]").click()
await page.getByRole('option', {name: 'Needs Analysis'}).click()

await page.locator("//button[@name='SaveEdit']").click()

//await expect(page.locator("//lightning-formatted-text[text()='Naveen']")).toBeVisible()
})