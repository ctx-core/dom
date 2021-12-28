import { dom_ } from './dom_.js'
export function scroll_anchor(href:string, root?:HTMLElement):void {
	const href_target = dom_(href, root)
	if (href_target) {
		href_target.scrollIntoView()
		window.location.hash = href
	}
}
export { scroll_anchor as anchor__scroll }
