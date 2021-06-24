import { dom_a_ } from './dom_a_'
import type { selector_T } from './selector_T'
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export function matches(el:Node, selector: selector_T|HTMLElement):boolean {
	const { parentNode } = el
	if (!parentNode) return false
	if (selector == el) return true
	if (typeof selector !== 'string') return false
	const nodes = dom_a_(selector, parentNode)
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i] == el) return true
	}
	return false
}
