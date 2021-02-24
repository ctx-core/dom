export function trigger_native_event(
	node:HTMLElement, event_name:string, bubbles = true, cancelable = false
):Event {
	const event = document.createEvent('HTMLEvents')
	event.initEvent(event_name, bubbles, cancelable)
	node.dispatchEvent(event)
	return event
}
export {
	trigger_native_event as trigger__native_event
}
