/** @type {import('./BoundingClientRect_.d.ts').BoundingClientRect_} */
export const BoundingClientRect_ = (el)=>{
	const { top, bottom, left, right, height, width, } = el.getBoundingClientRect()
	return {
		top,
		bottom,
		left,
		right,
		height,
		width
	}
}
export { BoundingClientRect_ as _BoundingClientRect, }

