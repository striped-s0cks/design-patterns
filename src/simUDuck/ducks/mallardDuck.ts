import { appendLog } from "../../utils";
import FlyWithWings from "../flyBehaviors/flyWithWings";
import Quack from "../quckBehaviors/quack";
import Duck from "./duck";

export default class MallardDuck extends Duck {
    constructor() {
        super();
        
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(): void {
        appendLog("I'm a real Mallard duck");
    }
}
