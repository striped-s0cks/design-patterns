import Beverage from "./beverage";

export default class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend Coffee';
    }

    cost(): number {
        return 0.89;
    }
}
