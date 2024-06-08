import { HeaderType, appendHeader } from "../utils";
import Menu from "./menus/menu";
import MenuItem from "./menus/menuItem";
import Waitress from "./waitress";

appendHeader('Composite Pattern', HeaderType.h1);
appendHeader('Menu', HeaderType.h2);

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast');
const dinerMenu = new Menu('DINER MENU', 'Lunch');
const cafeMenu = new Menu('CAFE MENU', 'Dinner');
const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!');

const allMenus = new Menu('ALL MENUS', 'All menus combined');
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);

pancakeHouseMenu.add(new MenuItem(
    'Regular Pancake Breakfast', 
    'Pancakes with fried eggs, sausages', 
    false, 
    2.99));

pancakeHouseMenu.add(new MenuItem(
    'Waffles', 
    'Waffles with your choice of blueberries or strawberries', 
    true, 
    3.59));
    
cafeMenu.add(new MenuItem(
    'Veggie Burger and Air Fries', 
    'Veggie burger on a whole wheat bun, lettuce, tomato and fries', 
    true, 
    3.99));

cafeMenu.add(new MenuItem(
    'Soup of the day', 
    'A cup of the soup of the day, with a side salad', 
    false, 
    4.29));

cafeMenu.add(new MenuItem(
    'Burrito', 
    'A large burrito, with whole pinto beans, salsa, guacamole', 
    true, 
    3.69));

dinerMenu.add(new MenuItem(
    'Pasta', 
    'Spaghetti with Marinara Sauce, and a slice of sourdough bread',
     true, 
     3.89));

dinerMenu.add(dessertMenu);

dessertMenu.add(new MenuItem(
    'Apple Pie', 
    'Applie pie with a flakey crust, topped with vanilla ice cream', 
    true, 
    1.59));

const waitress = new Waitress(allMenus);
waitress.printMenu();
