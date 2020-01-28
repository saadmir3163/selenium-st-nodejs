const { Builder, By,Key} = require("selenium-webdriver");

const driver=new Builder().forBrowser("chrome").build();

async function register(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css('#title')).sendKeys('My Name Is Saad Mir l1f15bscs0254 ');
        await driver.findElement(By.css('#description')).sendKeys("This is my first Automated Testing experience");
        await driver.findElement(By.css('div:nth-child(3) > label > span.custom-control-indicator')).click();
        await driver.findElement(By.css('#submit')).click();
    }
    catch(error){
        console.log(error);
        
    }
}
register();

