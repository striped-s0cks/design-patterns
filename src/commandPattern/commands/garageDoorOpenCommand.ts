import GarageDoor from "../receivers/garageDoor";
import Command from "./command";

export default class GarageDoorOpenCommand implements Command {
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.up();
        this.garageDoor.lightOn();
    }

    undo(): void {
        this.garageDoor.down();
        this.garageDoor.lightOff();
    }
}
