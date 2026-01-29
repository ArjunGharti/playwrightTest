import {Locator, Page} from "@playwright/test"


export class LoginPage{

    page: Page;
    email: Locator
    password: Locator;
    loginButton: Locator;
   

   
    constructor(page: Page){
        this.page = page
        this.email = this.page.locator('#userEmail');
        this.password = this.page.locator('#userPassword');
        this.loginButton = this.page.locator('#login')
     
    }
    
    async naviagte(){
        await this.page.goto('')
    }


    async logIn(email: string, passwd: string){
        await this.email.fill(email);
        await this.password.fill(passwd)
        await this.loginButton.click()

    }



}