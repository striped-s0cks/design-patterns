import MenuComponent from "./menus/menuComponent";

export default class Waitress {
    allMenus: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;
    }

    printMenu(): void {
        this.allMenus.print();
    }
}
