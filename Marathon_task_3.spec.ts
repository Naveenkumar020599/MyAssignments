import test,{expect} from '@playwright/test' 

test("service now",async({page})=>{

    await page.goto("https://dev362368.service-now.com/")

    await page.locator("//input[@id='user_name']").fill("admin")

    await page.locator("//input[@id='user_password']").fill("slBB0^k9l^YU")

    await page.locator("//button[@id='sysverb_login']").click()

    await page.getByRole("menuitem",{name:'All'}).click()

    await page.getByLabel('Service Catalog').nth(1).click()
    
    await page.frame({name:'gsft_main'})?.getByRole("link",{name:'Mobiles'}).first().click()

    await page.frame({name:'gsft_main'})?.getByRole("img",{name:"Request for Apple iPhone 13 pro"}).click()

    await page.frame({name:'gsft_main'})?.locator("//label[text()='Yes']").click()

    await page.frame({name:'gsft_main'})?.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("887686786")

    await page.frame({name:'gsft_main'})?.getByRole("combobox",{name:'Monthly data allowance'}).selectOption({ label: 'Unlimited [add $4.00]' })

    await page.frame({name:'gsft_main'})?.locator("//label[text()='Sierra Blue']").click()
    await page.frame({name:'gsft_main'})?.locator("//label[text()='512 GB [add $300.00]']").click()

    await page.frame({name:'gsft_main'})?.getByTitle('Order Now').click()


    const order = await page.frame({name:'gsft_main'})?.locator("//div[@class='notification notification-success']").innerText()
    
    expect(order).toContain("Thank you, your request has been submitted")

    await page.screenshot({ path: 'Screenshots/ServiceNow.png', fullPage: true})
    await page.waitForTimeout(3000)
})