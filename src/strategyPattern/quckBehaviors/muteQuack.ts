import { appendLog } from "../../utils";
import QuackBehavior from "./quackBehavior";

/**
 * Quacking behavior implementation for ducks that do not make any sound (like decoy ducks).
 */
export default class MuteQuack implements QuackBehavior {
    quack(): void {
        appendLog("<< Silence >>");
    }
}
