import MenuIterator from "../iterators/iterator";

export default interface Menu {
    createIterator(): MenuIterator;
}
