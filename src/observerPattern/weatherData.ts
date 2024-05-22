import { appendLog } from "../utils";
import Observer from "./observer";
import Subject from "./subject";

export default class WeatherData implements Subject {
    private observers: Set<Observer>;
    private temp: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = new Set();
    }

    registerObserver(observer: Observer): void {
        this.observers.add(observer);
        appendLog('Observer has been added');
    }

    removeObserver(observer: Observer): void {
        this.observers.delete(observer);
        appendLog('Observer has been removed');
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    measurementsChanged(): void {
        appendLog('Weather measurements has changed');
        this.notifyObservers();
    }

    setMeasurements(temp: number, humidity: number, pressure: number): void {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }

    getTemperature(): number {
        return this.temp;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }
}
