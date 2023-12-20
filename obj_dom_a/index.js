import { el_a_ } from '../el_a/index.js'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 * @param {import('../_types/index.js').selector_T}selector
 * @param {ParentNode}[parent]
 * @returns {Node[]}
 */
export function obj_dom_a_(
	selector,
	parent
) {
	if (typeof selector === 'object') return selector
	return el_a_(selector, parent)
}
export { obj_dom_a_ as __dom2, }

