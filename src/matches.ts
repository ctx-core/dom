import { _dom_a1 } from './_dom_a1'
import type { selector_T } from './selector_T'
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export function matches(el:Node, selector: selector_T|HTMLElement) {
	const { parentNode } = el
	if (!parentNode) return
	if (selector == el) return true
	if (typeof selector !== 'string') return
	const nodes = _dom_a1(selector, parentNode)
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i] == el) return true
	}
}
