import Book from "./books/book";
import HistoryBookProxy from "./books/historyBookProxy";

export default class Bookstore {
    getHistoryBook(): Book {
        return new HistoryBookProxy(3000);
    }
}
