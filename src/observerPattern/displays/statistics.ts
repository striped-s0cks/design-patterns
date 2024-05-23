import { appendLog, roundToDecimal } from "../../utils";
import Observer from "../observer";
import WeatherData from "../weatherData";
import Display from "./display";

export default class Statistics implements Observer, Display {
    private temps: number[];
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.temps = [];
    }

    update(): void {
        const temp = this.weatherData.getTemperature();
        this.temps.push(temp);
        this.display();
    }

    display(): void {
        appendLog(`Avg/Max/Min temperatures - ${this.getAvgTemp()}/${this.getMaxTemp()}/${this.getMinTemp()}F`)
    }

    private getMinTemp(): number {
        if (!this.temps || !this.temps.length) {
            return 0;
        }

        return roundToDecimal(Math.min(...this.temps), 1);
    }

    private getMaxTemp(): number {
        if (!this.temps || !this.temps.length) {
            return 0;
        }

        return roundToDecimal(Math.max(...this.temps), 1);
    }

    private getAvgTemp(): number {
        if (!this.temps || !this.temps.length) {
            return 0;
        }

        let sum = 0;
        for (const temp of this.temps) {
            sum += temp;
        }

        return roundToDecimal(sum / this.temps.length, 1)
    }
}
