import { appendLog } from "../utils";

export default class Singleton {
    private static uniqueInstance: Singleton;
    private count: number;

    private constructor() {
        this.count = 0;
    }

    static getInstance(): Singleton {
        if (this.uniqueInstance == null) {
            this.uniqueInstance = new Singleton();
        }

        appendLog('Singleton instance has been requested');
        return this.uniqueInstance;
    }

    increaseCount(): void {
        this.count++;
        appendLog(`Count has been increased. Current value is ${this.count}`);
    }

    decreaseCount(): void {
        this.count--;
        appendLog(`Count has been decreased. Current value is ${this.count}`);
    }
}
