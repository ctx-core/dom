/**
 * Is the HTMLElement visible?
 * @param {HTMLElement} el
 * @returns {boolean} true if `el` is visible
 * @private
 */
export function is_visible(el) {
	return !!el.offsetParent
}

