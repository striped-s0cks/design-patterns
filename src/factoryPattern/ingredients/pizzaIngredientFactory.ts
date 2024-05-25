export default interface PizzaIngredientFactory {
    createDough(): string;
    createCheese(): string;
    createSauce(): string;
    createVeggies(): string[];
    createPepperoni(): string;
    createClam(): string;
}
