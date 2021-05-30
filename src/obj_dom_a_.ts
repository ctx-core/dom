import { dom_a_ } from './dom_a_'
import type { selector_T } from './selector_T'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 */
export function obj_dom_a_(
	selector:selector_T,
	parent?:HTMLElement
):NodeList {
	if (typeof selector === 'object') return selector
	return dom_a_(selector, parent)
}
export {
	obj_dom_a_ as __dom2,
}
