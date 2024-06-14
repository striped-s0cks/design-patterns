/**
 * Returns the element with id "root".
 */
export function getRoot(): HTMLElement {
    return document.getElementById('root');
}

export enum HeaderType {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

/**
 * Adds a header element with the provided text to the root element.
 */
export function appendHeader(text: string, headerType: HeaderType): void {
    const header = document.createElement(headerType);
    header.append(text);
    getRoot().append(header);
}

/**
 * Adds a `li` element with provided log to the root element.
 * If `elementId` is provided, the log will be added to that element instead.
 */
export function appendLog(log: string, elementId?: string): void {
    const li = document.createElement('li');
    li.append(log);

    const element = elementId ? document.getElementById(elementId) : getRoot();
    element.append(li);
}

/**
 * Adds a `br` element to the root element.
 */
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

/**
 * Returns a random number between zero and provided number (excluded) - [0, number).
 */
export function getRandom(limit: number): number {
    return Math.floor(Math.random() * limit);
}

/**
 * Adds an empty div with provided id to the root element.
 */
export function appendDiv(id: string): void {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    getRoot().append(div);
}
