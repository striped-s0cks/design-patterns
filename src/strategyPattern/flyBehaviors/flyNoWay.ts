import { appendLog } from "../../utils";
import FlyBehavior from "./flyBehavior";

/**
 * Flying behavior implementation for ducks that do not fly (like rubber ducks and decoy ducks).
 */
export default class FlyNoWay implements FlyBehavior {
    fly(): void {
        appendLog("I can't fly");
    }
}
