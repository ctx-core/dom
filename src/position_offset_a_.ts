/**
 * Returns the `[left, top]` offset position of the given el
 */
export function position_offset_a_(el:HTMLElement):[number, number] {
	let left = el.offsetLeft
	let top = el.offsetTop
	while (el = (el.offsetParent as HTMLElement)) {
		left += el.offsetLeft
		top += el.offsetTop
	}
	return [left, top]
}
export {
	position_offset_a_ as _position_offset_a1,
	position_offset_a_ as _xy__offset,
}
