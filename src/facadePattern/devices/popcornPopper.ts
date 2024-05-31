import { appendLog } from "../../utils";

export default class PopcornPopper {
    on(): void {
        appendLog('Popcorn popper has been turned on');
    }

    off(): void {
        appendLog('Popcorn popper has been turned off');
    }

    pop(): void {
        appendLog('Popcorn popper is popping popcorn');
    }
}
