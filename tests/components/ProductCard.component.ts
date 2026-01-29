import { Locator, Page } from "@playwright/test";

export class ProductCard{
    container: Locator;
    nameLocator: Locator;
    priceLocator: Locator;
    watchButton: Locator;
    addToCartButton: Locator;

    constructor(container: Locator){
        this.container = container
        
        this.nameLocator = container.locator('h5 b');
        this.priceLocator = container.locator('.text-muted');
        this.watchButton = container.locator('button.w-40');
        this.addToCartButton = container.locator('button.w-10');

    }


    async getName(): Promise<string>{
        return (await this.nameLocator.textContent())?.trim()|| '';
    }

    async getPrice(): Promise<string>{
        return(await this.priceLocator.textContent())?.trim()|| '';
    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();

    }

    async isVisible(): Promise<boolean> {
        return await this.container.isVisible();
    }


    getContainer(): Locator {
        return this.container;

    }

}