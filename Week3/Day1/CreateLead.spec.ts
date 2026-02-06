import test from "@playwright/test"

test("createLead", async({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main")     // Navigate to the URL

await page.locator("#username").fill("Demosalesmanager")         // Enter Username
await page.locator("#password").fill("crmsfa")                   // Enter Password
await page.locator(".decorativeSubmit").click()                  // Click Login Button

await page.locator(`text='CRM/SFA'`).click()                     // Click CRM/SFA Link

await page.locator(`text='Leads'`).click()                       // Click Leads Tab

await page.locator('//a[text()="Create Lead"]').click()                 // Click Create Lead Option

await page.locator("#createLeadForm_companyName").fill("TestLeaf")   // Enter Company Name
await page.locator("#createLeadForm_firstName").fill("Naveen")    // Enter First Name
await page.locator("#createLeadForm_lastName").fill("kumar")             // Enter Last Name
await page.locator("#createLeadForm_personalTitle").fill("MR")       // Enter Salutation
await page.locator("#createLeadForm_generalProfTitle").fill("Tester") // Enter Title
await page.locator("#createLeadForm_annualRevenue").fill("100000")    // Enter Annual Revenue
await page.locator("#createLeadForm_departmentName").fill("QA")       // Enter Department
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9840056685")   // Enter Phone Number

await page.locator(".smallSubmit").click()                        // Click Create Lead Button

await page.waitForTimeout(5000)

})