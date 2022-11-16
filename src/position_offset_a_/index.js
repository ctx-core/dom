/**
 * Returns the `[left, top]` offset position of the given el
 */
export function position_offset_a_(el) {
	let left = el.offsetLeft
	let top = el.offsetTop
	while (el = el.offsetParent) {
		left += el.offsetLeft
		top += el.offsetTop
	}
	return [
		left,
		top
	]
}
export { position_offset_a_ as _position_offset_a1, position_offset_a_ as _xy__offset, }

