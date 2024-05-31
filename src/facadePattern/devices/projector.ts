import { appendLog } from "../../utils";

export default class Projector {
    on(): void {
        appendLog('Projector has been turned on');
    }

    off(): void {
        appendLog('Projector has been turned off');
    }

    wideScreenMode(): void {
        appendLog('Projector has been set to widescreen mode (16x9)');
    }
}
