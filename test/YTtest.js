const {Builder, By, Key} = require("selenium-webdriver")

async function youtube(){
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://youtube.com")

    await driver.findElement(By.name("search_query")).sendKeys("Learn Selenium",Key.RETURN)
}

youtube()