import { appendLog, getRandom } from "../../utils";
import GumballMachine from "../gumballMachine";
import State from "./state";

export default class HasQuarterState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        appendLog('You cannot insert another quarter');
    }

    ejectQuarter(): void {
        appendLog('Quarter has been returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank(): boolean {
        appendLog('You have turned the crank');

        // random number from 0 to 10. will consider 0 as winner.
        const winnerRandom = getRandom(10);
        if ((winnerRandom === 0) && (this.gumballMachine.getGumballCount() > 1)) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }

        return true;
    }

    dispense(): void {
        appendLog('You need to turn the crank');
    }

    print(): void {
        appendLog('....Machine has a quarter');
    }

    refill(): void {
        // do nothing
    }
}
