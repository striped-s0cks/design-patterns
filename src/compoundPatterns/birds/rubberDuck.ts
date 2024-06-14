import { appendLog } from "../../utils";
import Quackable from "./quackable";

export default class RubberDuck implements Quackable {
    quack(): void {
        appendLog('Squeak');
    }
}
