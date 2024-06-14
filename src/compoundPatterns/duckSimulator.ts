import DuckCall from "./birds/duckCall";
import Goose from "./birds/goose";
import GooseAdapter from "./patterns/gooseAdapter";
import MallardDuck from "./birds/mallardDuck";
import RedheadDuck from "./birds/redheadDuck";
import RubberDuck from "./birds/rubberDuck";
import Quackable from "./birds/quackable";
import QuackCounter from "./patterns/quackCounter";
import { appendBreak, appendLog } from "../utils";
import DuckFactory from "./patterns/duckFactory";
import Flock from "./patterns/flock";

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

        appendLog('Flock of ducks');
        this.simulate(duckFlock);
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
