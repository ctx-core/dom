/**
 * Is the HTMLElement visible?
 * @param {HTMLElement} el
 * @returns {boolean} true if `el` is visible
 */
export function is_visible(el:HTMLElement):boolean {
	return !!(el.offsetParent)
}
