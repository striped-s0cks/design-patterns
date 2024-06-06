*The Template Method Pattern* defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

```mermaid
classDiagram
    class CaffeineBeverage {
        <<abstract>>
        final prepareRecipe()
        boilWater()
        brew()
        pourInCup()
        addCondiments()
        customerWantsCondiments()
    }

    class Coffee {
        brew()
        addCondiments()
        customerWantsCondiments()
    }

    class Tea {
        brew()
        addCondiments()
    }

    CaffeineBeverage <|-- Coffee
    CaffeineBeverage <|-- Tea
```
