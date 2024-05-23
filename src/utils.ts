/**
 * Returns the element with id "root".
 */
export function getRoot(): HTMLElement {
    return document.getElementById('root');
}

/**
 * Adds an h1 element with the provided text to the root element.
 */
export function appendHeader(text: string): void {
    const header = document.createElement('h1');
    header.append(text);
    getRoot().append(header);
}

/**
 * Adds a div with provided logs to the root element.
 */
export function appendLog(log: string): void {
    const li = document.createElement('li');
    li.append(log);
    getRoot().append(li);
}

/**
 * Adds a divider to the root element.
 */
export function appendDivider(): void {
    getRoot().append('--------------------------------------------------------------------------------');
}

export function appendBreak(): void {
    const br = document.createElement('br');
    getRoot().append(br);
}

/**
 * Rounds a number to specified decimal.
 */
export function roundToDecimal(num: number, decimal: number): number {
    return Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
