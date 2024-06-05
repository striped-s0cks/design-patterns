import { appendLog } from "../../utils";
import CaffeineBeverage from "./caffeineBeverage";

export default class Tea extends CaffeineBeverage {
    brew(): void {
        appendLog('Steeping the tea');
    }

    addCondiments(): void {
        appendLog('Lemon has been added');
    }
}
