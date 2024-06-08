*The Composite Pattern* allows you to compose objects into tree structures to represent part-whole hierarchies.
Composite lets clients treat individual objects and compositions of objects uniformly.

```mermaid
classDiagram
    class MenuComponent {
        <<abstract>>
        getName()
        getDescription()
        getPrice()
        isVegetarian()
        print()
        add(MenuComponent)
        remove(MenuComponent)
        getChild(int)
    }

    class MenuItem {
        getName()
        getDescription()
        getPrice()
        isVegetarian()
        print()
    }

    class Menu {
        menuComponents
        getName()
        getDescription()
        print()
        add(MenuComponent)
        remove(MenuComponent)
        getChild(int)
    }

    MenuComponent <|-- MenuItem
    MenuComponent <|-- Menu

    class Waitress

    Waitress *-- MenuComponent
```
