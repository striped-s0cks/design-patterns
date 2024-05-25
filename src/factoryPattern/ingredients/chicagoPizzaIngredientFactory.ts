import PizzaIngredientFactory from "./pizzaIngredientFactory";

export default class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): string {
        return 'Thick Crust Dough';
    }

    createSauce(): string {
        return 'Plum Tomato Sauce';
    }

    createCheese(): string {
        return 'Mozzarella Cheese';
    }

    createVeggies(): string[] {
        return [
            'Black Olives',
            'Spinach',
            'Eggplant',
        ];
    }

    createPepperoni(): string {
        return 'Sliced Pepperoni';
    }

    createClam(): string {
        return 'Frozen Clams';
    }
}
