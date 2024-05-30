import { appendLog } from "../../utils";

export default class Stereo {
    private volume = 5;

    on(): void {
        appendLog('Stereo has been turned on');
    }

    off(): void {
        appendLog('Stereo has been turned off');
    }

    setCD(): void {
        appendLog('Stereo has been set to play the CD');
    }

    setDVD(): void {
        appendLog('Stereo has been set to play the DVD');
    }

    setRadio(): void {
        appendLog('Stereo has been set to play the radio');
    }

    setVolume(volume: number): void {
        appendLog(`Stereo volume has been set to ${volume}`);
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}
