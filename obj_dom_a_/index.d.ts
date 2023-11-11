import type { selector_T } from '../_types/index.js'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 */
export declare function obj_dom_a_<
	E extends Element = Element
>(selector:selector_T, parent?:ParentNode):E[]
export { obj_dom_a_ as __dom2, }
