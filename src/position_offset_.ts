export function position_offset_(el:HTMLElement):position_offset_T {
	let top = 0
	let left = 0
	while (el) {
		top += el.offsetTop || 0
		left += el.offsetLeft || 0
		el = el.offsetParent as HTMLElement
	}
	return { top, left }
}
export interface position_offset_T {
	top:number
	left:number
}
export {
	position_offset_ as _position_offset,
}
