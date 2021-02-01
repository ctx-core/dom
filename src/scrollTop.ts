import { no__dom } from './no__dom'
/**
 * Scroll to the top of the parentElement
 * @param {Node} el
 * @param {boolean=} scrollWindow=true
 * @returns {Node}
 */
export function scrollTop(el:HTMLElement, scrollWindow = true) {
	if (no__dom) return el
	if (scrollWindow) window.scrollTo(0, 0)
	el.scrollTop = 0
	const { parentElement } = el
	if (parentElement) scrollTop(parentElement, false)
	return el
}

