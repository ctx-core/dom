export function _offset_bcr(node) {
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
	_offset_bcr as _bcr__offset
}
