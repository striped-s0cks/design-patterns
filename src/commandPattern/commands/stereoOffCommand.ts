import Stereo from "../receivers/stereo";
import Command from "./command";

export default class StereoOffCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on();
    }
}
