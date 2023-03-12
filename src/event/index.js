/**
 * @param {Element}node
 * @param {string}event_name
 * @param {unknown}detail
 * @returns {Event}
 * @private
 */
export function custom_event__trigger(
	node,
	event_name,
	detail
) {
	let event
	if (window.CustomEvent) {
		event = new CustomEvent(event_name, {
			detail
		})
	} else {
		event = document.createEvent('CustomEvent')
		event.initCustomEvent(event_name, true, true, detail)
	}
	node.dispatchEvent(event)
	return event
}
export {
	custom_event__trigger as trigger_custom_event,
	custom_event__trigger as trigger__custom_event,
}
