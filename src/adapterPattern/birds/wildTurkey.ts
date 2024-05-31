import { appendLog } from "../../utils";
import Turkey from "./turkey";

export default class WildTurkey implements Turkey {
    gobble(): void {
        appendLog('Gobble gobble');
    }

    fly(): void {
        appendLog("I'm flying a short distance");
    }
}
