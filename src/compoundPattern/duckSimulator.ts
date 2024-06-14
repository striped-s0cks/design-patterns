import Quackable from "./birds/quackable";
import QuackCounter from "./patterns/quackCounter";
import { appendBreak, appendLog } from "../utils";
import DuckFactory from "./patterns/duckFactory";
import Flock from "./patterns/flock";
import Quackologist from "./patterns/observer/quackologist";

export default class DuckSimulator {
    run(duckFactory: DuckFactory): void {
        const duckFlock = new Flock();
        duckFlock.add(duckFactory.createRedheadDuck());
        duckFlock.add(duckFactory.createDuckCall());
        duckFlock.add(duckFactory.createRubberDuck());
        duckFlock.add(duckFactory.createGooseDuck());

        const mallardFlock = new Flock();
        mallardFlock.add(duckFactory.createMallardDuck());
        mallardFlock.add(duckFactory.createMallardDuck());
        mallardFlock.add(duckFactory.createMallardDuck());

        duckFlock.add(mallardFlock);

        const quackologist = new Quackologist();
        duckFlock.registerObserver(quackologist);

        appendLog('Flock of ducks');
        this.simulate(duckFlock);
        appendBreak();

        appendLog(`The ducks quacked ${QuackCounter.getQuacks()} times`);
        appendBreak();

        appendLog('Flock of mallards');
        this.simulate(mallardFlock);
        appendBreak();

        appendLog(`The ducks quacked ${QuackCounter.getQuacks()} times`);
    }

    private simulate(duck: Quackable): void {
        duck.quack();
    }
}
