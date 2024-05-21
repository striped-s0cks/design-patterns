import { appendLog } from "../../utils";
import FlyNoWay from "../flyBehaviors/flyNoWay";
import Quack from "../quckBehaviors/quack";
import Duck from "./duck";

export default class ModelDuck extends Duck {
    constructor() {
        super();

        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display(): void {
        appendLog("I'm a model duck");
    }
}
