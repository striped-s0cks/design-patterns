import NYPizzaIngredientFactory from "../ingredients/nyPizzaIngredientFactory";
import CheesePizza from "../pizzas/cheesePizza";
import ClamPizza from "../pizzas/clamPizza";
import Pizza from "../pizzas/pizza";
import PizzaStore from "./pizzaStore";

export default class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        const ingredientFactory = new NYPizzaIngredientFactory();

        if (type === 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName('New York Style Cheese Pizza');
        } else if (type === 'clam') {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName('New York Style Clam Pizza');
        }

        return pizza;
    }
}
