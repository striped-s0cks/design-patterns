import Light from "../receivers/light";
import Command from "./command";

export default class LightOffCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}
