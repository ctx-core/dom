import { dom_ } from '../dom_/index.js'
/**
 * @param {string}href
 * @param {Element}[root]
 * @private
 */
export function scroll_anchor(href, root) {
	const href_target = dom_(href, root)
	if (href_target) {
		href_target.scrollIntoView()
		window.location.hash = href
	}
}
export { scroll_anchor as anchor__scroll }
