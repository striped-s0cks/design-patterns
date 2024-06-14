import { appendLog } from "../../../utils";
import Observer from "./observer";
import QuackObservable from "./quackObservable";

export default class Quackologist implements Observer {
    update(duck: QuackObservable): void {
        appendLog(`Quackologist: ${duck.constructor.name} just quacked.`);
    }
}
