import type { BoundingClientRect } from './bounding_client_rect_'
export function scroll_bcr_(
	node:HTMLElement, scroll_node = document.documentElement
):BoundingClientRect&{ x:number, y:number }|undefined {
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
	scroll_bcr_ as _scroll_bcr,
	scroll_bcr_ as _bcr__scroll,
}
