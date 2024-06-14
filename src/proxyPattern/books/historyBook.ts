import { appendLog } from "../../utils";
import Book from "./book";

export default class HistoryBook implements Book {
    private author: string;
    private title: string;
    private pageCount: number;

    constructor() {
        this.author = 'Howard Zinn';
        this.title = "A People's History of the United States";
        this.pageCount = 729;
    }

    getAuthor(): string {
        return this.author;
    }

    getTitle(): string {
        return this.title;
    }

    getPageCount(): number {
        return this.pageCount;
    }

    printBookInfo(): void {
        appendLog(`"${this.getTitle()}", by ${this.getAuthor()}, ${this.getPageCount()} pages`, 'historyBookDiv');
    }
}
