import ChicagoPizzaIngredientFactory from "../ingredients/chicagoPizzaIngredientFactory";
import CheesePizza from "../pizzas/cheesePizza";
import ClamPizza from "../pizzas/clamPizza";
import Pizza from "../pizzas/pizza";
import PizzaStore from "./pizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        const ingredientFactory = new ChicagoPizzaIngredientFactory();

        if (type === 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName('Chicago Style Deep Dish Cheese Pizza');
        } else if (type === 'clam') {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName('Chicago Style Deep Dish Clam Pizza');
        }

        return pizza;
    }
}
