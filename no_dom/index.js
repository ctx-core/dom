export const no_dom = no_dom_()
export { no_dom as no__dom }
/**
 * @returns {boolean}
 * @private
 */
export function no_dom_() {
	return typeof globalThis['window'] === 'undefined'
}
export { no_dom_ as _no_dom, no_dom_ as _no__dom, }
