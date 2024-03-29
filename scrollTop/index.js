import { no_dom } from '../no_dom/index.js'
/**
 * Scroll to the top of the parentElement
 * @param {HTMLElement}el
 * @param {boolean}[scrollWindow]
 * @private
 */
export function scrollTop(el, scrollWindow = true) {
	if (no_dom) return el
	if (scrollWindow) window.scrollTo(0, 0)
	el.scrollTop = 0
	const { parentElement } = el
	if (parentElement) scrollTop(parentElement, false)
	return el
}
