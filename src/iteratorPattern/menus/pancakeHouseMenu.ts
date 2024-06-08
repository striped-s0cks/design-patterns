import MenuIterator from "../iterators/iterator";
import PancakeHouseIterator from "../iterators/pancakeHouseIterator";
import Menu from "./menu";
import MenuItem from "./menuItem";

export default class PancakeHouseMenu implements Menu {
    menuItems: Set<MenuItem>;

    constructor() {
        this.menuItems = new Set<MenuItem>();

        this.addItem("K&B's Pancake Breakfast", 'Pancakes with scrambled eggs and toast', true, 2.99);
        this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausages', false, 2.99);
        this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49);
        this.addItem('Waffles', 'Waffles with your choice of blueberries or strawberries', true, 3.59);
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number): void {
        const item = new MenuItem(name, description, isVegetarian, price);
        this.menuItems.add(item);
    }

    createIterator(): MenuIterator {
        return new PancakeHouseIterator(this.menuItems);
    }
}
