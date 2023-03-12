import type { selector_T } from '../_types'
/**
 * The first matching HTMLElement from the selector
 */
export declare function dom_<
	Out extends Element = Element
>(
	selector:selector_T,
	parent?:ParentNode|null
):Out|null
export { dom_ as _dom, }
