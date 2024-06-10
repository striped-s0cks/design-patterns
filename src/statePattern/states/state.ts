export default interface State {
    insertQuarter(): void;
    ejectQuarter(): void;
    turnCrank(): boolean;
    dispense(): void;
    print(): void;
    refill(): void;
}
