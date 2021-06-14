import { dom_a_ } from './dom_a_';
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export function matches(el, selector) {
    const { parentNode } = el;
    if (!parentNode)
        return;
    if (selector == el)
        return true;
    if (typeof selector !== 'string')
        return;
    const nodes = dom_a_(selector, parentNode);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] == el)
            return true;
    }
}
//# sourceMappingURL=src/matches.js.map