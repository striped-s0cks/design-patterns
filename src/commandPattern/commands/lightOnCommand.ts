import Light from "../receivers/light";
import Command from "./command";

export default class LightOnCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}
