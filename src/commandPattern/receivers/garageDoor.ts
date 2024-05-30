import { appendLog } from "../../utils";
import Light from "./light";

export default class GarageDoor {
    private light: Light;

    constructor() {
        this.light = new Light('Garage');
    }

    up(): void {
        appendLog('Garage door has been opened');
    }

    down(): void {
        appendLog('Garage door has been closed');
    }

    stop(): void {
        appendLog('Garage door has been stopped');
    }

    lightOn(): void {
        this.light.on();
    }

    lightOff(): void {
        this.light.off();
    }
}
