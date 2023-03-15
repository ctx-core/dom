import { el_a_ } from '../el_a_/index.js'
/**
 * Match `el` to `selector`.
 * @param {Node} el
 * @param {import('../_types').selector_T|Element}selector
 * @return {boolean}
 * @private
 */
export function matches(el, selector) {
	const { parentNode } = el
	if (!parentNode) return false
	if (selector == el) return true
	if (typeof selector !== 'string') return false
	const nodes = el_a_(selector, /** @type {ParentNode} */parentNode)
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i] == el) return true
	}
	return false
}

