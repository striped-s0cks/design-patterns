import { HeaderType, appendHeader } from "../utils";
import Singleton from "./singleton";

appendHeader('Singleton Pattern', HeaderType.h1);
appendHeader('Single Counter', HeaderType.h2);

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.increaseCount(); // 1
singleton2.increaseCount(); // 2
singleton2.decreaseCount(); // 1
singleton1.increaseCount(); // 2

const singleton3 = Singleton.getInstance();
singleton3.increaseCount(); // 3
singleton1.decreaseCount(); // 2
singleton3.increaseCount(); // 3
singleton3.increaseCount(); // 4
singleton2.increaseCount(); // 5
