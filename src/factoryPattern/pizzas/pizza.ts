import { appendLog } from "../../utils";

export default abstract class Pizza {
    name: string;

    dough: string;
    sauce: string;
    veggies: string[];
    cheese: string;
    pepperoni: string;
    clam: string;

    abstract prepare(): void;

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

    setName(name: string): void {
        this.name = name;
    }
}
