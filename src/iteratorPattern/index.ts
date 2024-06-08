import { HeaderType, appendHeader } from "../utils";
import CafeMenu from "./menus/cafeMenu";
import DinerMenu from "./menus/dinerMenu";
import PancakeHouseMenu from "./menus/pancakeHouseMenu";
import Waitress from "./waitress";

appendHeader('Iterator Pattern', HeaderType.h1);
appendHeader('Menu', HeaderType.h2);

const pancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();
const cafeMenu = new CafeMenu();

const waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
waitress.printMenu();
