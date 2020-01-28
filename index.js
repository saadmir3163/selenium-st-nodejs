const { Builder, By,} = require("selenium-webdriver");

const driver= new Builder().forBrowser("chrome").build();

async function Autoregister(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("s@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await (await driver).findElement(By.name("submit")).click();

    }catch(error){
        console.log(error);
    }
}
Autoregister();

