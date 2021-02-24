export function _position_offset(el:HTMLElement):position_offset_T {
	let top = 0
	let left = 0
	do {
		top += el.offsetTop || 0
		left += el.offsetLeft || 0
		el = el.offsetParent as HTMLElement
	} while (el)
	return { top, left }
}
export interface position_offset_T {
	top:number
	left:number
}
