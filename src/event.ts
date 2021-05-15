export function trigger_custom_event(node:HTMLElement, event_name:string, detail = {}):Event {
	let event
	if (window.CustomEvent) {
		event = new CustomEvent(event_name, { detail })
	} else {
		event = document.createEvent('CustomEvent')
		event.initCustomEvent(event_name, true, true, detail)
	}
	node.dispatchEvent(event)
	return event
}
export {
	trigger_custom_event as trigger__custom_event
}
