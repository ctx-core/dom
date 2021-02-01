export function scrollIntoView_collection_child(parent:HTMLElement, child:HTMLElement) {
	const { top, height } = parent.getBoundingClientRect()
	const bottom = top + height
	const { top: child_top, height: child_height } = child.getBoundingClientRect()
	const child_bottom = child_top + child_height
	if (child_top < top) {
		child.scrollIntoView(true)
	} else if (child_bottom > bottom) {
		child.scrollIntoView({ block: 'end' })
	}
}
export { scrollIntoView_collection_child as scrollIntoView__child__collection }