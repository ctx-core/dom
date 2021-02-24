export function _BoundingClientRect(el) {
	const {
		top,
		bottom,
		left,
		right,
		height,
		width,
		length
	} = el.getBoundingClientRect()
	return { top, bottom, left, right, height, width, length }
}
