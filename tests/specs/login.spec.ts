import {test, Page} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { HomePage } from "../pages/homePage";


test("login with valid credintial", async({page: Page}) => {


    const loginPage = new LoginPage(Page);

    await loginPage.naviagte()
    await loginPage.logIn("johnsmith26@gmail.com", "Learning@26")

   const homePage = new HomePage(Page)
   await homePage.addProductToCardByName("iphone 13 pro")
   const pNames = await homePage.getProductNames()
   //console.log(pNames)

})

test('verify product has correct price', async({page : Page}) => {
    const loginPage = new LoginPage(Page);

    await loginPage.naviagte()
    await loginPage.logIn("johnsmith26@gmail.com", "Learning@26")

    const homePage = new HomePage(Page)
    const product = await homePage.findProductByName('ADIDAS ORIGINAL')
    console.log(await product?.getPrice())
    console.log(await product?.getName())


})