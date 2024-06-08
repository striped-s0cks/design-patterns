import MenuItem from "../menus/menuItem";
import MenuIterator from "./iterator";

export default class DinerMenuIterator implements MenuIterator {
    menuItems: MenuItem[] = [];
    index = 0;

    constructor(menuItems: MenuItem[]) {
        this.menuItems = menuItems;
    }

    hasNext(): boolean {
        return this.index < this.menuItems.length;
    }

    next(): MenuItem {
        const item = this.menuItems[this.index];
        this.index++;

        return item;
    }
}
