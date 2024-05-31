import { appendLog } from "../../utils";

export default class Screen {
    up(): void {
        appendLog('Screen has been lifted');
    }

    down(): void {
        appendLog('Screen has been lowered');
    }
}
