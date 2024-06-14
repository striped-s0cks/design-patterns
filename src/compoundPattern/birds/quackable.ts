import QuackObservable from "../patterns/observer/quackObservable";

export default interface Quackable extends QuackObservable {
    quack(): void;
}
