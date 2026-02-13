import test from '@playwright/test'

test("task 1",async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")

    await page.locator("//input[@class='p-inputtext p-component p-autocomplete-input p-autocomplete-input']").fill("chennai")
    
    await page.locator("//div[@class='cities-overlay cities-active']").nth(5).click()


    await page.locator("//span[@class='cinemas-inactive']").click()


    await page.locator("//span[text()='Select Cinema']").click()

    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()

    //await page.locator("//span[text()='Select Date']").click()

    //await page.locator("//li[@class='p-dropdown-item']/span[1]").first().click()

    await page.locator("//span[text()='Today']").click()

    await page.getByText("O ROMEO").nth(1).click()

    await page.locator("//span[@class='mx-2']").nth(13).click()

    await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']/span").click()

    await page.getByRole('button',{name:"Accept"}).click()
    await page.getByRole('button',{name:"Accept"}).click()

    await page.locator("//span[@class='seat-current-pvr']").nth(38).click()

    const seatNumber = await page.locator("//p[text()='I5']").innerText()
    console.log(seatNumber)

    const totalAmount = await page.locator("//h6[text()='242.61']").innerText()
    console.log(totalAmount)

    await page.locator("//button[text()='Proceed']").click()
    await page.waitForTimeout(3000)
})