import Beverage from "./beverage";

export default class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso';
    }

    cost(): number {
        return 1.99;
    }
}
