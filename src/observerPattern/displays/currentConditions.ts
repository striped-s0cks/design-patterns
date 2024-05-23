import { appendLog, roundToDecimal } from "../../utils";
import Observer from "../observer";
import WeatherData from "../weatherData";
import Display from "./display";

export default class CurrentConditions implements Observer, Display {
    private temp: number;
    private humidity: number;
    private pressure: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(): void {
        this.temp = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();

        this.display();
    }

    display(): void {
        const temp = roundToDecimal(this.temp, 1);
        const humidity = roundToDecimal(this.humidity, 1);
        const pressure = roundToDecimal(this.pressure, 1);

        appendLog(`Current conditions: ${temp}F degrees, ${humidity}% humidity and ${pressure}atm pressure`);
    }
}
