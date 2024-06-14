import { HeaderType, appendHeader } from "../utils";
import Bookstore from "./bookstore";

appendHeader('Proxy Pattern', HeaderType.h1);
appendHeader('History Book', HeaderType.h2);

const bookstore = new Bookstore();
const book = bookstore.getHistoryBook();
book.printBookInfo();
