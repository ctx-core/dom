import { dom_a_ } from '../dom_a_/index.js'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 */
export function obj_dom_a_(selector, parent) {
	if (typeof selector === 'object') return selector
	return dom_a_(selector, parent)
}
export { obj_dom_a_ as __dom2, }

