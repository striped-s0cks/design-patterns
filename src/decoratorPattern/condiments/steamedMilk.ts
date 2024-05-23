import { roundToDecimal } from "../../utils";
import Beverage from "../beverages/beverage";
import { CondimentDecorator } from "./condimentDecorator";

export default class SteamedMilk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Steamed Milk';
    }

    cost(): number {
        return roundToDecimal(this.beverage.cost() + 0.10, 2);
    }
}
