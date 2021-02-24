import { scroll_anchor } from './scroll_anchor'
export function onclick_scroll_anchor(event:MouseEvent, root:HTMLElement):void {
	event.preventDefault()
	const { currentTarget } = event
	const href = (currentTarget as HTMLAnchorElement).getAttribute('href')
	scroll_anchor(href as string, root)
}
