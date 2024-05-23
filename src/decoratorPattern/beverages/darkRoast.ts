import Beverage from "./beverage";

export default class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast Coffee';
    }

    cost(): number {
        return 0.99;
    }
}
