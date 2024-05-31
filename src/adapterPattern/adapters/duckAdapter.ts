import Duck from "../birds/duck";
import Turkey from "../birds/turkey";

export default class DuckAdapter implements Turkey {
    duck: Duck;

    constructor(duck: Duck) {
        this.duck = duck;
    }

    gobble(): void {
        this.duck.quack();
    }

    fly(): void {
        this.duck.fly();
    }
}
