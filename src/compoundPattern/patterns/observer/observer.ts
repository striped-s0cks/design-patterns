import QuackObservable from "./quackObservable";

export default interface Observer {
    update(duck: QuackObservable): void;
}
