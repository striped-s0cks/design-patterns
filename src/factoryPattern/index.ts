import { HeaderType, appendBreak, appendDivider, appendHeader, appendLog } from "../utils";
import ChicagoPizzaStore from "./stores/chicagoPizzaStore";
import NYPizzaStore from "./stores/nyPizzaStore";

appendHeader('Factory Pattern', HeaderType.h1);
appendHeader('Pizza Shop', HeaderType.h2);

const nyStore = new NYPizzaStore();
const nyPizza = nyStore.orderPizza('cheese');
appendLog(`Ethan ordered a ${nyPizza.getName()}`);

appendBreak();

const chicagoStore = new ChicagoPizzaStore();
const chicagoPizza = chicagoStore.orderPizza('cheese');
appendLog(`Joel ordered a ${chicagoPizza.getName()}`);

appendDivider();
