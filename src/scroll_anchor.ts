import { _dom } from './_dom'
export function scroll_anchor(href:string, root:HTMLElement) {
	const href_target = _dom(href, root)
	if (href_target) {
		href_target.scrollIntoView()
		window.location.hash = href
	}
}
export { scroll_anchor as anchor__scroll }