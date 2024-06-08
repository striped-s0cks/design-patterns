import MenuItem from "../menus/menuItem";
import MenuIterator from "./iterator";

export default class CafeMenuIterator implements MenuIterator {
    iterator: Iterator<MenuItem>;
    size = 0;
    index = 0;

    constructor(menuItems: Map<string, MenuItem>) {
        this.iterator = menuItems.values();
        this.size = menuItems.size;
    }

    hasNext(): boolean {
        return this.index < this.size;
    }

    next(): MenuItem {
        const item = this.iterator.next().value;
        this.index++;
        
        return item;
    }
}
