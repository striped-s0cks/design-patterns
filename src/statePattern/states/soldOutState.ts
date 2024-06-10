import { appendLog } from "../../utils";
import GumballMachine from "../gumballMachine";
import State from "./state";

export default class SoldOutState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        appendLog('You cannot insert a quarter, the machine is sold out');
    }

    ejectQuarter(): void {
        appendLog('You cannot eject, you have not inserter a quarter yet');
    }

    turnCrank(): boolean {
        appendLog('You have turned the crank but there are no gumballs');
        return false;
    }

    dispense(): void {
        appendLog('No gumball dispensed');
    }

    print(): void {
        appendLog('....Machine is sold out');
    }

    refill(): void {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
}
