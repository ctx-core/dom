import { __dom } from './_dom_a1'
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export function matches(el, selector) {
	const { parentNode } = el
	if (!parentNode) return
	if (selector == el) return true
	if (typeof selector !== 'string') return
	const nodes = __dom(selector, parentNode)
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i] == el) return true
	}
}
