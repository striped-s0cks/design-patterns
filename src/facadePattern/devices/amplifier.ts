import { appendLog } from "../../utils";
import StreamingPlayer from "./streamingPlayer";

export default class Amplifier {
    player: StreamingPlayer;

    on(): void {
        appendLog('Amplifier has been turned on');
    }

    off(): void {
        appendLog('Amplifier has been turned off');
    }

    setStreamingPlayer(player: StreamingPlayer): void {
        this.player = player;
        appendLog('Amplifier has updated streaming player');
    }

    setSurroundSound(): void {
        appendLog('Amplifier surround sound has been turned on');
    }

    setVolume(volume: number): void {
        appendLog(`Amplifier volume has been set to ${volume}`);
    }
}
