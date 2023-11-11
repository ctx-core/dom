/**
 * @param {HTMLElement}el
 * @returns {import('../bounding_client_rect_/index.js').BoundingClientRect}
 * @private
 */
export function offset_bcr_(el) {
	const {
		offsetTop,
		offsetLeft,
		offsetHeight,
		offsetWidth,
	} = el
	return {
		top: offsetTop,
		right: offsetLeft + offsetWidth,
		bottom: offsetTop + offsetHeight,
		left: offsetLeft,
		height: offsetHeight,
		width: offsetWidth,
		x: offsetLeft,
		y: offsetTop,
	}
}
export {
	offset_bcr_ as _offset_bcr,
	offset_bcr_ as _bcr__offset,
}
