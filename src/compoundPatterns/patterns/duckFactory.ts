import Goose from "../birds/goose";
import Quackable from "../birds/quackable";
import GooseAdapter from "./gooseAdapter";

export default abstract class DuckFactory {
    abstract createMallardDuck(): Quackable;
    abstract createRedheadDuck(): Quackable;
    abstract createDuckCall(): Quackable;
    abstract createRubberDuck(): Quackable;
    
    createGooseDuck(): Quackable {
        return new GooseAdapter(new Goose());
    }
}
