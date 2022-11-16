/**
 * Remove hash from `window.location.href` without refreshing the page
 */
export function empty_window_location() {
	window.location.replace('#')
	if (typeof window.history.replaceState == 'function') {
		history.replaceState({}, '', window.location.href.slice(0, -1))
	}
}
export { empty_window_location as empty__location__window }

