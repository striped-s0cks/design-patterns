import { appendDiv, appendLog } from "../../utils";
import Book from "./book";
import HistoryBook from "./historyBook";

export default class HistoryBookProxy implements Book {
    private historyBook: Book;
    private isLoading = false;
    private delayInMs: number;
    // without a dummy div, the print log will be added to the bottom of the page
    private dummyDivId = 'historyBookDiv';

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

    async printBookInfo(): Promise<void> {
        if (this.historyBook) {
            appendLog(`"${this.getTitle()}", by ${this.getAuthor()}, ${this.getPageCount()} pages`, this.dummyDivId);
        } else {
            appendLog('Loading the greatest history book, please wait....');
            appendDiv(this.dummyDivId);

            if (!this.isLoading) {
                this.isLoading = true;

                // make it look like we are making a network call to get the object
                return new Promise(() => setTimeout(() => {
                    this.setHistoryBook(new HistoryBook());
                    this.printBookInfo();
                }, this.delayInMs));
            }
        }
    }
}
