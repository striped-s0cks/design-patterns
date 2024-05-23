import { roundToDecimal } from "../../utils";
import Beverage from "../beverages/beverage";
import { CondimentDecorator } from "./condimentDecorator";

export default class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy';
    }

    cost(): number {
        return roundToDecimal(this.beverage.cost() + 0.15, 2);
    }
}
