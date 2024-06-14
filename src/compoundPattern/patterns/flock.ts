import Quackable from "../birds/quackable";
import Observer from "./observer/observer";

export default class Flock implements Quackable {
    private quackers: Quackable[] = [];

    add(quacker: Quackable): void {
        this.quackers.push(quacker);
    }

    quack(): void {
        for (const quacker of this.quackers) {
            quacker.quack();
        }
    }

    registerObserver(observer: Observer): void {
        for (const quacker of this.quackers) {
            quacker.registerObserver(observer);
        }
    }

    notifyObservers(): void {
        // do nothing, ducks will notify their observers
    }
}
