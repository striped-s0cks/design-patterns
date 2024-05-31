import { appendLog } from "../../utils";

export default class StreamingPlayer {
    filename = '';

    on(): void {
        appendLog('Streaming player has been turned on');
    }

    off(): void {
        appendLog('Streaming player has been turned off');
    }

    play(filename: string): void {
        this.filename = filename;
        appendLog(`Streaming player has started playing "${this.filename}"`);
    }

    stop(): void {
        appendLog(`Streaming player has stopped playing "${this.filename}"`);
    }
}
