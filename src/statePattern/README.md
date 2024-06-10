*The State Pattern* allows an object to alter its behavior when its internal state changes. The object will appear to
change its class.

```mermaid
classDiagram
    class State {
        <<interface>>
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    class HasQuarterState {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    class NoQuarterState {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    class SoldOutState {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    class SoldState {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    class WinnerState {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        dispense()
        print()
        refill()
    }

    State <|.. HasQuarterState
    State <|.. NoQuarterState
    State <|.. SoldOutState
    State <|.. SoldState
    State <|.. WinnerState

    class GumballMachine {
        insertQuarter()
        ejectQuarter()
        turnCrank()
        releaseBall()
        print()
        refill()
        setState()
    }

    GumballMachine *-- State
```
