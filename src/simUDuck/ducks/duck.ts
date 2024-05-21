import { appendLog } from "../../utils";
import FlyBehavior from "../flyBehaviors/flyBehavior";
import QuackBehavior from "../quckBehaviors/quackBehavior";

export default abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor() {}
    
    abstract display(): void;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        appendLog("All ducks float, even decoys!");
    }

    setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior;
        appendLog('FlyBehavior has been updated');
    }

    setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior;
        appendLog('QuackBehavior has been updated');
    }
}