/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 */
export declare function obj_dom_<
	E extends Element = Element
>(
	selector:string|E,
	parent?:ParentNode|null
):E|null
export { obj_dom_ as _dom2, }
