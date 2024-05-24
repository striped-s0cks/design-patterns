import { appendLog } from "../../utils";

export default abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = [];

    prepare(): void {
        appendLog(`Preparing ${this.name}`);
        appendLog('Tossing dough...');
        appendLog('Adding sause...');
        appendLog('Adding toppings:');
        for (const topping of this.toppings) {
            appendLog(`....${topping}`);
        }
    }

    bake(): void {
        appendLog('Baking for 25 minures at 350F');
    }

    cut(): void {
        appendLog('Cutting pizza into diagonal slices');
    }

    box(): void {
        appendLog('Placing pizza in official PizzaStore box');
    }

    getName(): string {
        return this.name;
    }
}
