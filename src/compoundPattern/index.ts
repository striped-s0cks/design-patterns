import { HeaderType, appendHeader } from "../utils";
import DuckSimulator from "./duckSimulator";
import CountingDuckFactory from "./patterns/countingDuckFactory";

appendHeader('Compound Pattern', HeaderType.h1);
appendHeader('Duck Simulator: with Goose Adapter and Decorator and Abstract Factory and Composite and Observer', HeaderType.h2);

const duckFactory = new CountingDuckFactory();
const duckSimulator = new DuckSimulator();
duckSimulator.run(duckFactory);
