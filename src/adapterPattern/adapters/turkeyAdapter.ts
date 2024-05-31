import Duck from "../birds/duck";
import Turkey from "../birds/turkey";

export default class TurkeyAdapter implements Duck {
    turkey: Turkey;

    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
