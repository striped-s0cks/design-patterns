import { appendLog } from "../../utils";

export default class Light {
    private location: string;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        appendLog(`${this.location} light has been turned on`);
    }

    off(): void {
        appendLog(`${this.location} light has been turned off`);
    }
}
