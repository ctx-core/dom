/** @type {import('./trigger_native_event').trigger_native_event} */
export const trigger_native_event = (node, event_name, bubbles = true, cancelable = false)=>{
	const event = document.createEvent('HTMLEvents')
	event.initEvent(event_name, bubbles, cancelable)
	node.dispatchEvent(event)
	return event
}
export { trigger_native_event as trigger__native_event }
