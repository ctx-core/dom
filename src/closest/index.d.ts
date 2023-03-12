import type { selector_T } from '../_types'
/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export declare function closest(
	selector:selector_T,
	element:HTMLElement,
	self_check?:boolean
):ParentNode|undefined
