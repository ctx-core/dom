/**
 * Returns the `[left, top]` offset position of the given el
 */
export function _position_offset_a1(el:HTMLElement):[number, number] {
	let left = el.offsetLeft
	let top = el.offsetTop
	while (el = (el.offsetParent as HTMLElement)) {
		left += el.offsetLeft
		top += el.offsetTop
	}
	return [left, top]
}
export {
	_position_offset_a1 as _xy__offset
}
