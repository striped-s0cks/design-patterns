/**
 * Interface for a command. If it only needs "execute" then it can be replaced with a lambda.
 * ```
 * remote.setCommand(2, () => light.on(), () => light.off());
 * ```
 */
export default interface Command {
    execute(): void;
    undo(): void;

    /*
    // implement if need to recover after a crash by reinvoking the actions
    store(): void;
    load(): void;
    */
}
