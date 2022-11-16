import { scroll_anchor } from '../scroll_anchor/index.js'
export function onclick_scroll_anchor(event, root) {
	event.preventDefault()
	const { currentTarget } = event
	const href = currentTarget.getAttribute('href')
	scroll_anchor(href, root)
}

