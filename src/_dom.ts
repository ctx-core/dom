/**
 * The first matching HTMLElement from the selector
 * @param {string} selector - the DOM query selector
 * @param {HTMLElement=} parent
 * @returns {HTMLElement} the first HTMLElement matching the selector
 */
export function _dom<O extends HTMLElement = HTMLElement>(selector, parent?:HTMLElement):O {
	return (parent || document).querySelector(selector)
}
