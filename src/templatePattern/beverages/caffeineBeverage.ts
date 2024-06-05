import { appendLog } from "../../utils";

export default abstract class CaffeineBeverage {
    // should NOT be overriden by subclasses (`final` in Java)
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();

        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    boilWater(): void {
        appendLog('Boiling water');
    }

    abstract brew(): void;

    pourInCup(): void {
        appendLog('Pouring into cup');
    }

    abstract addCondiments(): void;

    /**
     * A hook method that can be overriden if needed. If true, `addCondiments()` will be called, otherwise ignored.
     * Returns `true` by default.
     */
    customerWantsCondiments(): boolean {
        return true;
    }
}
