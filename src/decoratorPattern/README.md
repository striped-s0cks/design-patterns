*The Decorator Pattern* attaches additional responsibilities to an object dynamically. Decorators provide a flexible
alternative to subclassing for extending functionality.

```mermaid
classDiagram
    class Beverage {
        <<abstract>>
        description
        getDescription()
        cost()
    }

    class DarkRoast {
        cost()
    }

    class Decaf {
        cost()
    }

    class Espresso {
        cost()
    }

    Beverage <|-- DarkRoast
    Beverage <|-- Decaf
    Beverage <|-- Espresso

    class CondimentDecorator {
        <<abstract>>
        beverage: Beverage
        getDescription()
    }

    class Mocha {
        getDescription()
        cost()
    }

    class Soy {
        getDescription()
        cost()
    }

    class SteamedMilk {
        getDescription()
        cost()
    }

    class Whip {
        getDescription()
        cost()
    }

    CondimentDecorator <|-- Mocha
    CondimentDecorator <|-- Soy
    CondimentDecorator <|-- SteamedMilk
    CondimentDecorator <|-- Whip
    CondimentDecorator *-- Beverage
```
