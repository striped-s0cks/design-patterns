import ChicagoStyleCheesePizza from "../pizzas/chicagoStyleCheesePizza";
import Pizza from "../pizzas/pizza";
import PizzaStore from "./pizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new ChicagoStyleCheesePizza();
        }

        // add other pizza types

        return null;
    }
}
