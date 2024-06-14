import { appendLog } from "../../utils";
import Observer from "../../observerPattern/observer";
import Observable from "../patterns/observer/observable";
import Quackable from "./quackable";

export default class DuckCall implements Quackable {
    private observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    quack(): void {
        appendLog('Kwak');
        this.notifyObservers();
    }

    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }

    notifyObservers(): void {
        this.observable.notifyObservers();
    }
}
