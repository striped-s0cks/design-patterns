import { appendLog } from "../../utils";
import Command from "../commands/command";
import NoCommand from "../commands/noCommand";

export default class RemoteControl {
    onCommands: Command[] = [];
    offCommands: Command[] = [];
    // use stack if undo needs to be clicked multiple times (command history)
    lastCommand: Command;

    private slotCount = 7;

    constructor() {
        const noCommand = new NoCommand();

        for (let i = 0; i < this.slotCount; i++) {
            this.onCommands.push(noCommand);
            this.offCommands.push(noCommand);
        }

        this.lastCommand = noCommand;
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        if (slot >= this.slotCount) {
            return;
        }

        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    handleOnClick(slot: number): void {
        if (slot >= this.slotCount) {
            return;
        }

        const currentSlot = this.onCommands[slot];
        currentSlot.execute();
        this.lastCommand = currentSlot;
    }

    handleOffClick(slot: number): void {
        if (slot >= this.slotCount) {
            return;
        }

        const currentSlot = this.offCommands[slot];
        currentSlot.execute();
        this.lastCommand = currentSlot;
    }

    print(): void {
        appendLog('Remote Control:');

        for (let i = 0; i < this.slotCount; i++) {
            appendLog(`...[slot${i}]:______` + 
                `${this.onCommands[i].constructor.name}______${this.offCommands[i].constructor.name}`);
        }

        appendLog(`...[undo]:______${this.lastCommand.constructor.name}`);
    }

    handleUndoClick(): void {
        this.lastCommand.undo();
        this.lastCommand = new NoCommand();
    }
}
