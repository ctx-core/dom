import { _dom } from './_dom'
/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 */
export function _dom2(selector:string|object, parent?:HTMLElement):HTMLElement {
	if (typeof selector === 'object') return selector as HTMLElement
	return _dom(selector, parent)
}
