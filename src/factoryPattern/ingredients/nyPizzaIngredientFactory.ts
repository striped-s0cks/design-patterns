import PizzaIngredientFactory from "./pizzaIngredientFactory";

export default class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): string {
        return 'Thin Crust Dough';
    }

    createSauce(): string {
        return 'Marinara Sauce';
    }

    createCheese(): string {
        return 'Reggiano Cheese';
    }

    createVeggies(): string[] {
        return [
            'Garlic',
            'Onion',
            'Mushroom',
            'Red Pepper',
        ];
    }

    createPepperoni(): string {
        return 'Sliced Pepperoni';
    }

    createClam(): string {
        return 'Fresh Clam';
    }
}
