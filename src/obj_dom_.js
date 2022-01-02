import { dom_ } from './dom_.js'
/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 */ export function obj_dom_(selector, parent) {
	if (typeof selector === 'object') return selector
	return dom_(selector, parent)
}
export { obj_dom_ as _dom2, }

