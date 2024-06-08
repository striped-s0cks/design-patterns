import { HeaderType, appendBreak, appendHeader } from "../utils";
import CurrentConditions from "./displays/currentConditions";
import HeatIndex from "./displays/heatIndex";
import Statistics from "./displays/statistics";
import WeatherData from "./weatherData";

appendHeader('Observer Pattern', HeaderType.h1);
appendHeader('Weather Station', HeaderType.h2);

const weatherData = new WeatherData();
const currentConditions = new CurrentConditions(weatherData);
const statistics = new Statistics(weatherData);
const heatIndex = new HeatIndex(weatherData);

weatherData.setMeasurements(80, 65.6666, 30.4);
appendBreak();

weatherData.setMeasurements(83.812, 70, 29.2);
appendBreak();

weatherData.removeObserver(currentConditions);
weatherData.setMeasurements(78, 90.3, 29.2);
