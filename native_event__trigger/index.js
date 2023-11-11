/**
 * @param {Element}node
 * @param {string}event_name
 * @param {EventInit}[event_init]
 * @returns {Event}
 */
export function native_event__trigger(
	node,
	event_name,
	event_init = {
		bubbles: true,
	}
) {
	const event = new Event(event_name, event_init)
	node.dispatchEvent(event)
	return event
}
export {
	native_event__trigger as trigger_native_event,
	native_event__trigger as trigger__native_event,
}
