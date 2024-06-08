import { appendBreak, appendLog } from "../../utils";
import MenuComponent from "./menuComponent";

export default class Menu extends MenuComponent {
    menuComponents: MenuComponent[] = [];
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();

        this.name = name;
        this.description = description;
    }

    add(menuComponent: MenuComponent): void {
        this.menuComponents.push(menuComponent);
    }

    remove(menuComponent: MenuComponent): void {
        this.menuComponents = this.menuComponents.filter(item => item.getName() !== menuComponent.getName());
    }

    getChild(index: number): MenuComponent {
        return this.menuComponents[index];
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    print(): void {
        appendBreak();
        appendLog(`${this.getName()}, ${this.getDescription()}`);
        appendLog('-------------------------------------------');

        for (const menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }
}
