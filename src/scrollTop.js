import { no_dom } from './no_dom.js'
/**
 * Scroll to the top of the parentElement
 */
/** @type {import('./scrollTop').scrollTop} */
export const scrollTop = (el, scrollWindow = true)=>{
	if (no_dom) return el
	if (scrollWindow) window.scrollTo(0, 0)
	el.scrollTop = 0
	const { parentElement } = el
	if (parentElement) scrollTop(parentElement, false)
	return el
}

