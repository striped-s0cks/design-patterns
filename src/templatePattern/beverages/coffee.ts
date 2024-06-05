import { appendLog } from "../../utils";
import CaffeineBeverage from "./caffeineBeverage";

export default class Coffee extends CaffeineBeverage {
    brew(): void {
        appendLog('Dripping coffee through filter');
    }

    addCondiments(): void {
        appendLog('Sugar and milk have been added');
    }

    /**
     * Returns randomized answer, where 0 means No and 1 means Yes.
     */
    customerWantsCondiments(): boolean {
        appendLog('...Would you like milk and sugar with your coffee?');

        const answer = !!Math.floor(Math.random() * 2);
        appendLog(`...${answer ? 'Yes, please!' : 'No, thank you!'}`);

        return answer;
    }
}
