/**
 * @param {HTMLElement}el
 * @returns {import('./index.d.ts').BoundingClientRect}
 * @private
 */
export function BoundingClientRect_(el) {
	const {
		top,
		bottom,
		left,
		right,
		height,
		width,
	} = el.getBoundingClientRect()
	return {
		top,
		bottom,
		left,
		right,
		height,
		width,
	}
}
export { BoundingClientRect_ as _BoundingClientRect, }

