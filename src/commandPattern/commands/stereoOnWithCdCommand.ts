import Stereo from "../receivers/stereo";
import Command from "./command";

export default class StereoOnWithCdCommand implements Command {
    stereo: Stereo;
    prevVolume: number;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
        this.prevVolume = stereo.getVolume();
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCD();

        this.prevVolume = this.stereo.getVolume();
        this.stereo.setVolume(11);
    }

    undo(): void {
        this.stereo.setVolume(this.prevVolume);
        this.stereo.off();
    }
}
