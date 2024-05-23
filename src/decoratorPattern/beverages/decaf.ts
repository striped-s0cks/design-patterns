import Beverage from "./beverage";

export default class Decaf extends Beverage {
    constructor() {
        super();
        this.description = 'Decaf Coffee';
    }

    cost(): number {
        return 1.05;
    }
}
