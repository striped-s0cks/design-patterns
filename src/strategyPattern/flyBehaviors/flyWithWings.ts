import { appendLog } from "../../utils";
import FlyBehavior from "./flyBehavior";

/**
 * Flying behavior implementation for ducks that do fly.
 */
export default class FlyWithWings implements FlyBehavior {
    fly(): void {
        appendLog("I'm flying!!");
    }
}
