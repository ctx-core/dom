import type { selector_T } from '../_types'
/**
 * The first matching HTMLElement from the selector
 */
export declare function parent__el_<
	Out extends Element = Element
>(
	selector:selector_T,
	parent?:Element
):Out|null
export {
	parent__el_ as parent__dom_,
}
