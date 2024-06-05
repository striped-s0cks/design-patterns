import { HeaderType, appendBreak, appendDivider, appendHeader } from "../utils";
import Coffee from "./beverages/coffee";
import Tea from "./beverages/tea";

appendHeader('Template Method Pattern', HeaderType.h1);
appendHeader('Beverages', HeaderType.h2);

const tea = new Tea();
tea.prepareRecipe();

appendBreak();

const coffee = new Coffee();
coffee.prepareRecipe();

appendDivider();
