import NYStyleCheesePizza from "../pizzas/nyStyleCheesePizza";
import Pizza from "../pizzas/pizza";
import PizzaStore from "./pizzaStore";

export default class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new NYStyleCheesePizza();
        }

        // add other pizza types

        return null;
    }
}
