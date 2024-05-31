import { appendLog } from "../../utils";
import Duck from "./duck";

export default class MallardDuck implements Duck {
    quack(): void {
        appendLog('Quack');
    }

    fly(): void {
        appendLog("I'm flying");
    }
}
