import { appendLog } from "../../utils";
import PizzaIngredientFactory from "../ingredients/pizzaIngredientFactory";
import Pizza from "./pizza";

export default class ClamPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        appendLog(`Preparing ${this.name}`);

        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    }
}
