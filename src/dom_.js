/**
 * The first matching HTMLElement from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 */
export function dom_(selector, parent) {
    return (parent || document).querySelector(selector);
}
export { dom_ as _dom, };
//# sourceMappingURL=src/dom_.js.map