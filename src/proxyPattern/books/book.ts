export default interface Book {
    getAuthor(): string;
    getTitle(): string;
    getPageCount(): number;
    printBookInfo(): void;
}
