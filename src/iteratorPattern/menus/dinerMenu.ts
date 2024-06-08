import { appendLog } from "../../utils";
import DinerMenuIterator from "../iterators/dinerMenuIterator";
import MenuIterator from "../iterators/iterator";
import Menu from "./menu";
import MenuItem from "./menuItem";

export default class DinerMenu implements Menu {
    private MAX_ITEMS = 6;
    menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];

        this.addItem('Vegetarian BLT', "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
        this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
        this.addItem('Hotdog', 'A hot dog, wiht sauerkraut, relish, onions, topped with cheese', false, 3.05);
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number): void {
        if (this.menuItems.length >= this.MAX_ITEMS) {
            appendLog('Error: menu is full, cannot add item!');
        } else {
            const item = new MenuItem(name, description, isVegetarian, price);
            this.menuItems.push(item);
        }
    }

    createIterator(): MenuIterator {
        return new DinerMenuIterator(this.menuItems);
    }
}
