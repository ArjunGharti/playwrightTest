import { expect, Locator, Page } from "@playwright/test";
import { ProductCard } from "../components/productCard.component";


export class HomePage{

    readonly page: Page;
    private readonly productCardsLocator: Locator;
    
        
    constructor(page: Page){
        this.page = page

        this.productCardsLocator = page.locator('.card')
        
    }


    getProductCard(index: number): ProductCard {
        return new ProductCard(this.productCardsLocator.nth(index))

    }

    async getAllProductCards(): Promise<ProductCard[]> {
        const count = await this.productCardsLocator.count()
        const cards: ProductCard[] =[]

        for( let i =0; i < count; i++){
            cards.push(this.getProductCard(i))
        }

        return cards
    }

    async findProductByName(productName : string): Promise<ProductCard | null> {
        const cards = await this.getAllProductCards()

        for( const card of cards) {
            const name = await card.getName()

            if(name.toUpperCase() == productName.toUpperCase()){
                return card
            }
        }

        return null

    }

    async addProductToCardByName(ProductName : string): Promise<void> {
        const product = await this.findProductByName(ProductName)
        if( !product){
            throw new Error( `Product "${ProductName}" not found on the page`)
        }
        await product.addToCart()


    }

    async getProductNames(): Promise<string[]> {
        const cards = await this.getAllProductCards()
        return Promise.all(cards.map(card =>card.getName()))   
    }


    


    

}