import { appendLog } from "../../utils";

export default class TheaterLights {
    on(): void {
        appendLog('Theater lights have been turned on');
    }

    off(): void {
        appendLog('Theater lights have been turned off');
    }

    dim(value: number): void {
        appendLog(`Theater lights have been dimmed to ${value}%`);
    }
}
