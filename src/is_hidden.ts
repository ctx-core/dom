/**
 * Is the HTMLElement hidden?
 * @param {HTMLElement} el
 * @returns {boolean} true if `el` is hidden
 */
export function is_hidden(el:HTMLElement):boolean {
	return !(el.offsetParent)
}
