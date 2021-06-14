import type { selector_T } from './selector_T';
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */
export declare function matches(el: Node, selector: selector_T | HTMLElement): true | undefined;
