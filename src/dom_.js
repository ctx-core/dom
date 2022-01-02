/**
 * The first matching HTMLElement from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 * @type {import('./dom_.d.ts').dom_}
 */
export const dom_ = (selector, parent)=>{
	return (parent || document).querySelector(selector)
}
export { dom_ as _dom, }

