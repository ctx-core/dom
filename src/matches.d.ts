import type { selector_T } from './_types'
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export declare function matches(el:Node, selector:selector_T|HTMLElement):boolean;
