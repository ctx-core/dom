import type { BoundingClientRect } from './bounding_client_rect_'
export function offset_bcr_(node:HTMLElement):BoundingClientRect&{ x:number, y:number } {
	const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = node
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
