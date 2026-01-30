import {test,webkit,firefox} from "@playwright/test";

test("to launch flipkart",async()=>{
    const browserinstance = await firefox.launch({headless:false,channel:"firefox"});
    const browsercontext = await browserinstance.newContext();
    const flipKartPage = await browsercontext.newPage();
    await flipKartPage.goto("https://www.flipkart.com/");

    console.log(await flipKartPage.title());
    console.log(await flipKartPage.url());
})


test("to launch redbus",async()=>{
    const browserinstance = await webkit.launch({headless:false,channel:"webkit"});
    const browsercontext = await browserinstance.newContext();
    const redBusPage = await browsercontext.newPage();
    await redBusPage.goto(" https://www.redbus.in");

    
    console.log(await redBusPage.title());
    console.log(await redBusPage.url());
})