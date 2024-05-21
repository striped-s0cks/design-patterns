import { appendLog } from "../../utils";
import QuackBehavior from "./quackBehavior";

/**
 * Quacking behavior implementation for ducks that do quack.
 */
export default class Quack implements QuackBehavior {
    quack(): void {
        appendLog("Quack");
    }
}
