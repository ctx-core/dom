import { el_ } from '../el/index.js'
/**
 * @param {string}href
 * @param {Element}[root]
 * @private
 */
export function scroll_anchor(href, root) {
	const href_target = el_(href, root)
	if (href_target) {
		href_target.scrollIntoView()
		window.location.hash = href
	}
}
export { scroll_anchor as anchor__scroll }
