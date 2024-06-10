import { appendLog } from "../utils";
import HasQuarterState from "./states/hasQuarterState";
import NoQuarterState from "./states/noQuarterState";
import SoldOutState from "./states/soldOutState";
import SoldState from "./states/soldState";
import State from "./states/state";
import WinnerState from "./states/winnerState";

export default class GumballMachine {
    private soldOutState: State;
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;
    private winnerState: State

    private currentState: State;
    private gumballCount = 0;

    constructor(gumballCount: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.gumballCount = gumballCount;
        if (gumballCount > 0) {
            this.currentState = this.noQuarterState;
        } else {
            this.currentState = this.soldOutState;
        }
    }

    insertQuarter(): void {
        this.currentState.insertQuarter();
    }

    ejectQuarter(): void {
        this.currentState.ejectQuarter();
    }

    turnCrank(): void {
        const isSuccessful = this.currentState.turnCrank();
        if (isSuccessful) {
            this.currentState.dispense();
        }
    }

    releaseBall(): void {
        appendLog('A gumball has been dispensed');

        if (this.gumballCount > 0) {
            this.gumballCount--;
        }
    }

    refill(gumballCount: number): void {
        this.gumballCount += gumballCount;
        appendLog(`The machine has been refilled; it's new gumball count is: ${this.getGumballCount()}`);
        this.currentState.refill();
    }

    print(): void {
        appendLog('Standing Gumball Machine #3000');
        appendLog(`....Inventory: ${this.gumballCount} gumballs`);
        this.currentState.print();
    }

    setState(state: State) {
        this.currentState = state;
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    getNoQuarterState(): State {
        return this.noQuarterState;
    }

    getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    getSoldState(): State {
        return this.soldState;
    }

    getWinnerState(): State {
        return this.winnerState;
    }

    getGumballCount(): number {
        return this.gumballCount;
    }
}
