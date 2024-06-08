import { HeaderType, appendBreak, appendHeader, appendLog } from "../utils";
import DuckAdapter from "./adapters/duckAdapter";
import TurkeyAdapter from "./adapters/turkeyAdapter";
import MallardDuck from "./birds/mallardDuck";
import WildTurkey from "./birds/wildTurkey";

appendHeader('Adapter Pattern', HeaderType.h1);
appendHeader('Turkey Adapter', HeaderType.h2);

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);
const duckAdapter = new DuckAdapter(duck);

appendLog('Turkey says:');
turkey.gobble();
turkey.fly();

appendBreak();

appendLog('Duck says:');
duck.quack();
duck.fly();

appendBreak();

appendLog('TurkeyAdapter says:');
turkeyAdapter.quack();
turkeyAdapter.fly();

appendBreak();

appendLog('DuckAdapter says:');
duckAdapter.gobble();
duckAdapter.fly();
