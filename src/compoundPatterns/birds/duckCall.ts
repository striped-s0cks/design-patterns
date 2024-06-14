import { appendLog } from "../../utils";
import Quackable from "./quackable";

export default class DuckCall implements Quackable {
    quack(): void {
        appendLog('Kwak');
    }
}
