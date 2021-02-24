import { _dom_a1 } from './_dom_a1'
/**
 * All matching HTMLElements from the selector.
 *
 * - If selector is an object, return selector.
 */
export function __dom2(selector, parent?:HTMLElement):NodeList {
	if (typeof selector === 'object') return selector
	return _dom_a1(selector, parent)
}
