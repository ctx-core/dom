export function _BoundingClientRect(el:HTMLElement):BoundingClientRect {
	const {
		top,
		bottom,
		left,
		right,
		height,
		width,
	} = el.getBoundingClientRect()
	return { top, bottom, left, right, height, width }
}
export interface BoundingClientRect {
	top:number
	bottom:number
	left:number
	right:number
	height:number
	width:number
}
