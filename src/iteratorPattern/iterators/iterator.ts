import MenuItem from "../menus/menuItem";

export default interface MenuIterator {
    hasNext(): boolean;
    next(): MenuItem;
}
