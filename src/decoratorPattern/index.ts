import { appendDivider, appendHeader, appendLog } from "../utils";
import DarkRoast from "./beverages/darkRoast";
import Decaf from "./beverages/decaf";
import Espresso from "./beverages/espresso";
import HouseBlend from "./beverages/houseBlend";
import Mocha from "./condiments/mocha";
import Soy from "./condiments/soy";
import SteamedMilk from "./condiments/steamedMilk";
import Whip from "./condiments/whip";

appendHeader('Starbuzz Coffee');

const order1 = new Espresso();
appendLog(`${order1.getDescription()}, $${order1.cost()}`);

let order2 = new DarkRoast();
order2 = new Mocha(order2);
order2 = new Mocha(order2);
order2 = new Whip(order2);
appendLog(`${order2.getDescription()}, $${order2.cost()}`);

let order3 = new HouseBlend();
order3 = new Soy(order3);
order3 = new Mocha(order3);
order3 = new Whip(order3);
appendLog(`${order3.getDescription()}, $${order3.cost()}`);

let order4 = new Decaf();
order4 = new SteamedMilk(order4);
appendLog(`${order4.getDescription()}, $${order4.cost()}`);

appendDivider();
