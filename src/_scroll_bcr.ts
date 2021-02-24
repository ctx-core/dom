export function _scroll_bcr(node:HTMLElement, scroll_node = document.documentElement) {
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
		y: bcr.y,
	}
}
export {
	_scroll_bcr as _bcr__scroll
}
