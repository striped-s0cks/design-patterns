import Observer from "./observer";

export default interface QuackObservable {
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
}
