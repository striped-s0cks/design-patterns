import Quackable from "../birds/quackable";

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
}
