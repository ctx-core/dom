export function native_event__trigger(
	node, event_name, bubbles = true, cancelable = false
) {
	const event = document.createEvent('HTMLEvents')
	event.initEvent(event_name, bubbles, cancelable)
	node.dispatchEvent(event)
	return event
}
export {
	native_event__trigger as trigger_native_event,
	native_event__trigger as trigger__native_event,
}
