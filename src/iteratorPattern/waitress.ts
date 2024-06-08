import { appendLog } from "../utils";
import MenuIterator from "./iterators/iterator";
import Menu from "./menus/menu";

export default class Waitress {
    pancakeHouseMenu: Menu;
    dinerMenu: Menu;
    cafeMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
        this.cafeMenu = cafeMenu;
    }

    printMenu(): void {
        const pancakeHouseIterator = this.pancakeHouseMenu.createIterator();
        const dinerMenuIterator = this.dinerMenu.createIterator();
        const cafeMenuIterator = this.cafeMenu.createIterator();

        appendLog('MENU');
        appendLog('BREAKFAST');
        this.printMenuItems(pancakeHouseIterator);

        appendLog('LUNCH');
        this.printMenuItems(dinerMenuIterator);

        appendLog('DINNER');
        this.printMenuItems(cafeMenuIterator);      
    }

    private printMenuItems(iterator: MenuIterator): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            appendLog(`....${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);
        }
    }
}
