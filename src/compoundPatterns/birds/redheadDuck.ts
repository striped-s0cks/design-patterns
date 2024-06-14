import { appendLog } from "../../utils";
import Quackable from "./quackable";

export default class RedheadDuck implements Quackable {
    quack(): void {
        appendLog('Quack');
    }
}
