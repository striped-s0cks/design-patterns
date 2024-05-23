import Beverage from "../beverages/beverage";

export abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;
    
    abstract getDescription(): string;
}
