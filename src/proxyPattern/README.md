*The Proxy Pattern* provides a surrogate or placeholder for another object to control access to it.

```mermaid
classDiagram
    class Book {
        <<interface>>
        getAuthor()
        getTitle()
        getPageCount()
    }

    class HistoryBookProxy {
        getAuthor()
        getTitle()
        getPageCount()
    }

    class HistoryBook {
        getAuthor()
        getTitle()
        getPageCount()
    }

    Book <|.. HistoryBookProxy
    Book <|.. HistoryBook

    HistoryBookProxy *-- HistoryBook
```
