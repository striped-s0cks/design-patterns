import { appendLog } from "../../utils";
import QuackBehavior from "./quackBehavior";

/**
 * Quacking behavior implementation for ducks that squeak (like rubber ducks).
 */
export default class Squeak implements QuackBehavior {
    quack(): void {
        appendLog("Squeak");
    }
}
