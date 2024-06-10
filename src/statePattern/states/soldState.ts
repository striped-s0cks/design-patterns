import { appendLog } from "../../utils";
import GumballMachine from "../gumballMachine";
import State from "./state";

export default class SoldState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        appendLog('Please wait, we are already giving you a gumball');
    }

    ejectQuarter(): void {
        appendLog('Sorry, you have already turned the crank');
    }

    turnCrank(): boolean {
        appendLog('Turning twice does not get you another gumball!');
        return false;
    }

    dispense(): void {
        this.gumballMachine.releaseBall();

        if (this.gumballMachine.getGumballCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        } else {
            appendLog('Out of gumballs');
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    }

    print(): void {
        appendLog('....Machine is dispensing a gumball');
    }

    refill(): void {
        // do nothing
    }
}
