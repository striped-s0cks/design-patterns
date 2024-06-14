import Quackable from "../birds/quackable";
import Goose from "../birds/goose";
import Observer from "./observer/observer";
import Observable from "./observer/observable";

export default class GooseAdapter implements Quackable {
    private goose: Goose;
    private observable: Observable;

    constructor(goose: Goose) {
        this.goose = goose;
        this.observable = new Observable(this);
    }

    quack(): void {
        this.goose.honk();
        this.notifyObservers();
    }

    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    notifyObservers(): void {
        this.observable.notifyObservers();
    }
}
