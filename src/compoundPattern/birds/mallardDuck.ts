import { appendLog } from "../../utils";
import Observer from "../../observerPattern/observer";
import Observable from "../patterns/observer/observable";
import Quackable from "./quackable";

export default class MallardDuck implements Quackable {
    private observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    quack(): void {
        appendLog('Quack');
        this.notifyObservers();
    }

    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    notifyObservers(): void {
        this.observable.notifyObservers();
    }
}
