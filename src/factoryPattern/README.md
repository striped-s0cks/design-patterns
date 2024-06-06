*The Factory Method Pattern* defines an interface for creating an object, but lets subclasses decide which class to
instantiate. Factory Method lets a class defer instantiation to subclasses.

```mermaid
classDiagram
    class PizzaStore {
        <<abstract>>
        orderPizza()
    }

    class NYPizzaStore {
        orderPizza()
    }

    class ChicagoPizzaStore {
        orderPizza()
    }

    PizzaStore <|-- NYPizzaStore
    PizzaStore <|-- ChicagoPizzaStore

    class Pizza {
        <<abstract>>
    }

    class NYStyleCheesePizza
    class NYStylePepperoniPizza
    class NYStyleVeggiePizza

    Pizza <|-- NYStyleCheesePizza
    Pizza <|-- NYStylePepperoniPizza
    Pizza <|-- NYStyleVeggiePizza

    class ChicagoStyleCheesePizza
    class ChicagoStylePepperoniPizza
    class ChicagoStyleVeggiePizza

    Pizza <|-- ChicagoStyleCheesePizza
    Pizza <|-- ChicagoStylePepperoniPizza
    Pizza <|-- ChicagoStyleVeggiePizza
```

*The Abstract Factory Pattern* provides an interface for creating families of related or dependent objects without
specifying their concrete classes.

```mermaid
classDiagram
    class PizzaIngredientFactory {
        <<interface>>
        createDough()
        createCheese()
        createSauce()
        createVeggies()
        createPepperoni()
        createClam()
    }

    class NYPizzaIngredientFactory {
        createDough()
        createCheese()
        createSauce()
        createVeggies()
        createPepperoni()
        createClam()
    }

    class ChicagoPizzaIngredientFactory {
        createDough()
        createCheese()
        createSauce()
        createVeggies()
        createPepperoni()
        createClam()
    }

    PizzaIngredientFactory <|.. NYPizzaIngredientFactory
    PizzaIngredientFactory <|.. ChicagoPizzaIngredientFactory

    class Dough {
        <<interface>>
    }

    class ThinCrustDough
    class ThickCrustDough

    Dough <|.. ThinCrustDough
    Dough <|.. ThickCrustDough

    class Sauce {
        <<interface>>
    }

    class MarinaraSauce
    class PlumTomatoSauce

    Sauce <|.. MarinaraSauce
    Sauce <|.. PlumTomatoSauce
```
