const { Builder, By,Key,xpath} = require("selenium-webdriver");

const driver=new Builder().forBrowser("firefox").build();

async function menud(){
    try{
        //nb-option[@value=1]


        
    }
    catch(error){
        console.log(error);
    }
}