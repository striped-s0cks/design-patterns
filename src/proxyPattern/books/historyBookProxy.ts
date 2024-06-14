import { appendDiv, appendLog } from "../../utils";
import Book from "./book";
import HistoryBook from "./historyBook";

export default class HistoryBookProxy implements Book {
    private historyBook: Book;
    private isLoading = false;
    private delayInMs: number;

    constructor(delayInMs: number) {
        this.delayInMs = delayInMs;
    }

    getAuthor(): string {
        if (this.historyBook) {
            return this.historyBook.getAuthor();
        }

        return 'Author';
    }

    getTitle(): string {
        if (this.historyBook) {
            return this.historyBook.getTitle();
        }

        return 'Title';
    }

    getPageCount(): number {
        if (this.historyBook) {
            return this.historyBook.getPageCount();
        }

        return 100;
    }

    setHistoryBook(book: Book): void {
        this.historyBook = book;
    }

    printBookInfo(): void {
        if (this.historyBook) {
            this.historyBook.printBookInfo();
        } else {
            appendLog('Loading the greatest history book, please wait....');
            // without a dummy div, the print log will be added to the bottom of the page
            appendDiv('historyBookDiv');

            if (!this.isLoading) {
                this.isLoading = true;

                // some expensive operation
                setTimeout(() => {
                    this.setHistoryBook(new HistoryBook());
                    this.printBookInfo();
                }, this.delayInMs);
            }
        }
    }
}
