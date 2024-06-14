import Quackable from "../birds/quackable";

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
}
