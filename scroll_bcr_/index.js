/** @typedef {import('../bounding_client_rect_/index.d.ts').BoundingClientRect} */
/**
 * @param {HTMLElement}node
 * @param {HTMLElement}[scroll_node]
 * @returns {(BoundingClientRect&{x: number, y: number})|undefined}
 * @private
 */
export function scroll_bcr_(
	node,
	scroll_node = document.documentElement
) {
	if (!scroll_node) return
	const bcr = node.getBoundingClientRect()
	const { scrollLeft, scrollTop } = scroll_node
	return {
		top: bcr.top + scrollTop,
		right: bcr.right - scrollLeft,
		bottom: bcr.bottom - scrollTop,
		left: bcr.left + scrollLeft,
		height: bcr.height,
		width: bcr.width,
		x: bcr.x,
		y: bcr.y
	}
}
export {
	scroll_bcr_ as _scroll_bcr,
	scroll_bcr_ as _bcr__scroll,
}
