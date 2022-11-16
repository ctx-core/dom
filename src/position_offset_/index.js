export function position_offset_(el) {
	let top = 0
	let left = 0
	while (el) {
		top += el.offsetTop || 0
		left += el.offsetLeft || 0
		el = el.offsetParent
	}
	return {
		top,
		left
	}
}
export { position_offset_ as _position_offset, }

