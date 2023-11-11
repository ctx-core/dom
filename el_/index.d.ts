import type { selector_T } from '../_types/index.js'
/**
 * The first matching HTMLElement from the selector
 */
export declare function el_<
	Out extends Element = Element
>(
	selector:selector_T,
	parent?:Element
):Out|null
export {
	el_ as dom_,
	el_ as _dom,
}
