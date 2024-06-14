import { HeaderType, appendHeader } from "../utils";
import HistoryBookProxy from "./books/historyBookProxy";

appendHeader('Proxy Pattern', HeaderType.h1);
appendHeader('History Book', HeaderType.h2);

const book = new HistoryBookProxy(3000);
book.printBookInfo();
