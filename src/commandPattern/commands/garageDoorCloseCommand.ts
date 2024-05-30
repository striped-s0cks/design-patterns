import GarageDoor from "../receivers/garageDoor";
import Command from "./command";

export default class GarageDoorCloseCommand implements Command {
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.down();
        this.garageDoor.lightOff();
    }

    undo(): void {
        this.garageDoor.up();
        this.garageDoor.lightOn();
    }
}
