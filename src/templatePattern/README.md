*The Template Method Pattern* defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

```mermaid
classDiagram
    class AbstractClass {
        templateMethod()
        operation1()
        abstractOperation1()
        abstractOperation2()
        operation2()
    }

    class ConcreteClass {
        abstractOperation1()
        abstractOperation2()
    }

    AbstractClass <|-- ConcreteClass

    note for AbstractClass right "templateMethod() {\n&nbsp&nbsp&nbsp&nbspoperation1()\n&nbsp&nbsp&nbsp&nbspabstractOperation1()\n&nbsp&nbsp&nbsp&nbspabstractOperation2()\n&nbsp&nbsp&nbsp&nbspoperation2()\n}"
```