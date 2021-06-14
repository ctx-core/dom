/**
 * Returns true if it is a DOM element
 * @see {@link http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object}
 */
export function isElement(obj) {
    return (typeof HTMLElement === 'object'
        ? obj instanceof HTMLElement
        //DOM2
        : obj
            && typeof obj === 'object'
            && obj !== null
            && obj.nodeType === 1
            && typeof obj.nodeName === 'string');
}
//# sourceMappingURL=src/isElement.js.map