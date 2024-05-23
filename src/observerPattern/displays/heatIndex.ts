import { appendLog, roundToDecimal } from "../../utils";
import Observer from "../observer";
import WeatherData from "../weatherData";
import Display from "./display";

export default class HeatIndex implements Observer, Display {
    private temp: number;
    private humidity: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(): void {
        this.temp = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();

        this.display();
    }

    display(): void {
        const heatIndex = roundToDecimal(this.getHeatIndex(), 1);
        appendLog(`Heat index: ${heatIndex}`);
    }

    private getHeatIndex(): number {
        const temp = this.temp;
        const humidity = this.humidity;

        return 16.923 + 
            1.85212 * Math.pow(10, -1) * temp +
            5.37941 * humidity -
            1.00254 * Math.pow(10, -1) * temp * humidity +
            9.41695 * Math.pow(10, -3) * Math.pow(temp, 2) +
            7.28898 * Math.pow(10, -3) * Math.pow(humidity, 2) +
            3.45372 * Math.pow(10, -4) * Math.pow(temp, 2) * humidity -
            8.14971 * Math.pow(10, -4) * temp * Math.pow(humidity, 2) +
            1.02102 * Math.pow(10, -5) * Math.pow(temp, 2) * Math.pow(humidity, 2) -
            3.86460 * Math.pow(10, -5) * Math.pow(temp, 3) +
            2.91583 * Math.pow(10, -5) * Math.pow(humidity, 3) +
            1.42721 * Math.pow(10, -6) * Math.pow(temp, 3) * humidity +
            1.97483 * Math.pow(10, -7) * temp * Math.pow(humidity, 3) -
            2.18429 * Math.pow(10, -8) * Math.pow(temp, 3) * Math.pow(humidity, 2) +
            8.43296 * Math.pow(10, -10) * Math.pow(temp, 2) * Math.pow(humidity, 3) -
            4.81975 * Math.pow(10, -11) * Math.pow(temp, 3) * Math.pow(humidity, 3);
    }
}
