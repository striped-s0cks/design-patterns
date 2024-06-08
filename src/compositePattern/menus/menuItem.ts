import { appendLog } from "../../utils";
import MenuComponent from "./menuComponent";

export default class MenuItem extends MenuComponent {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();

        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    getPrice(): number {
        return this.price;
    }

    print(): void {
        appendLog(`....${this.getName()}${this.isVegetarian() ? ' (v)' : ''}, ${this.getPrice()} -- ${this.getDescription()}`);
    }
}
