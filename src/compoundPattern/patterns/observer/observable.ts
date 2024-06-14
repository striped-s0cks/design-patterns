import Observer from "./observer";
import QuackObservable from "./quackObservable";

export default class Observable implements QuackObservable {
    private observers: Observer[] = [];
    private duck: QuackObservable;

    constructor(duck: QuackObservable) {
        this.duck = duck;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.duck);
        }
    }
}
