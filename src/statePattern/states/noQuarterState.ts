import { appendLog } from "../../utils";
import GumballMachine from "../gumballMachine";
import State from "./state";

export default class NoQuarterState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        appendLog('You have inserted a quarter');
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    }

    ejectQuarter(): void {
        appendLog('You have not inserted a quarter');
    }

    turnCrank(): boolean {
        appendLog('You have turned the crank but there is no quarter');
        return false;
    }

    dispense(): void {
        appendLog('You need to pay first');
    }

    print(): void {
        appendLog('....Machine is waiting for quarter');
    }

    refill(): void {
        // do nothing
    }
}
