import DuckCall from "../birds/duckCall";
import MallardDuck from "../birds/mallardDuck";
import Quackable from "../birds/quackable";
import RedheadDuck from "../birds/redheadDuck";
import RubberDuck from "../birds/rubberDuck";
import DuckFactory from "./duckFactory";
import QuackCounter from "./quackCounter";

export default class CountingDuckFactory extends DuckFactory {
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }

    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }

    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }

    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}
