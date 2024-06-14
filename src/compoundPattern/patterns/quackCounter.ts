import Quackable from "../birds/quackable";
import Observer from "./observer/observer";

export default class QuackCounter implements Quackable {
    private duck: Quackable;
    private static quackCount = 0;

    constructor(duck: Quackable) {
        this.duck = duck;
    }

    quack(): void {
        this.duck.quack();
        QuackCounter.quackCount++;
    }

    static getQuacks(): number {
        return QuackCounter.quackCount;
    }

    registerObserver(observer: Observer): void {
        this.duck.registerObserver(observer);
    }

    notifyObservers(): void {
        // do nothing, duck will notify its observers
    }
}
