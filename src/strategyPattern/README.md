*The Strategy Pattern* defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy
lets the algorithm vary independently from clients that use it.

```mermaid
classDiagram
    class Duck {
        <<abstract>>
        flyBehavior: FlyBehavior
        quackBehavior: QuackBehavior
        setFlyBehavior()
        setQuackBehavior()
        performFly()
        performQuack()
        display()
    }

    class MallardDuck {
        display()
    }

    class ModelDuck {
        display()
    }

    class RubberDuck {
        display()
    }

    Duck <|-- MallardDuck
    Duck <|-- ModelDuck
    Duck <|-- RubberDuck

    class FlyBehavior {
        <<interface>>
        fly()
    }

    class FlyWithWings {
        fly()
    }

    class FlyNoWay {
        fly()
    }

    FlyBehavior <|.. FlyWithWings
    FlyBehavior <|.. FlyNoWay

    Duck *-- FlyBehavior

    class QuackBehavior {
        <<interface>>
        quack()
    }

    class Quack {
        quack()
    }

    class Squeak {
        quack()
    }

    QuackBehavior <|.. Quack
    QuackBehavior <|.. Squeak

    Duck *-- QuackBehavior
```
