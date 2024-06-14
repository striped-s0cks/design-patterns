import Quackable from "../birds/quackable";
import Goose from "../birds/goose";

export default class GooseAdapter implements Quackable {
    private goose: Goose;

    constructor(goose: Goose) {
        this.goose = goose;
    }

    quack(): void {
        this.goose.honk();
    }
}
