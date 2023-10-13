/**
 * @returns {boolean}
 * @private
 */
export function no_dom_() {
	return typeof globalThis['window'] === 'undefined'
}
export { no_dom_ as _no_dom, no_dom_ as _no__dom, }

