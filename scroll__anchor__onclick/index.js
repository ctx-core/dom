import { scroll_anchor } from '../scroll_anchor/index.js'
/**
 * @param {MouseEvent}event
 * @param {HTMLElement}[root]
 * @private
 */
export function scroll__anchor__onclick(event, root) {
	event.preventDefault()
	const { currentTarget } = event
	const href = currentTarget.getAttribute('href')
	scroll_anchor(href, root)
}
export {
	scroll__anchor__onclick as onclick_scroll_anchor,
}
