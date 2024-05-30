import Command from "./command";

/**
 * Class to handle when no command was assigned to the slot but the button was pressed anyway.
 */
export default class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}
