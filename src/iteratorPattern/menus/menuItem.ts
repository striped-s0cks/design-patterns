export default class MenuItem {
    name: string;
    description: string;
    isVegetarian: boolean;
    price: number;

    constructor(name: string, description: string, isVegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.isVegetarian = isVegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getIsVegetarian(): boolean {
        return this.isVegetarian;
    }

    getPrice(): number {
        return this.price;
    }
}
