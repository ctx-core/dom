import { selector_T } from '../_types/index.js'
/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export declare function closest<
	E extends ParentNode = ParentNode
>(
	selector:selector_T,
	element:HTMLElement,
	self_check?:boolean
):E|undefined
