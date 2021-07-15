import { dom_ } from './dom_.js'
/**
 * The first matching HTMLElement from the selector
 *
 * - If selector is an object, return selector.
 */
export function obj_dom_(
	selector:string|object, parent?:Node&ParentNode|null
):HTMLElement|null {
	if (typeof selector === 'object') return selector as HTMLElement
	return dom_(selector, parent)
}
export {
	obj_dom_ as _dom2,
}
