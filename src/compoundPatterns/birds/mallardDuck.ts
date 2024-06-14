import { appendLog } from "../../utils";
import Quackable from "./quackable";

export default class MallardDuck implements Quackable {
    quack(): void {
        appendLog('Quack');
    }
}
