import { appendLog, roundToOneDecimal } from "../../utils";
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
        const temp = roundToOneDecimal(this.temp);
        const humidity = roundToOneDecimal(this.humidity);
        const pressure = roundToOneDecimal(this.pressure);

        appendLog(`Current conditions: ${temp}F degrees, ${humidity}% humidity and ${pressure}atm pressure`);
    }
}
