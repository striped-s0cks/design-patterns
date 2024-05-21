import { appendLog } from "../../utils";
import FlyBehavior from "./flyBehavior";

/**
 * Flying behavior implementation for ducks that use rockets.
 */
export default class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        appendLog("I'm flying with a rocket!");
    }
}
