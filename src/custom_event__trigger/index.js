import { assign } from '@ctx-core/object'
/**
 * @param {Element}node
 * @param {string}event_name
 * @param {CustomEventInit}[custom_event_init]
 * @returns {CustomEvent}
 * @private
 */
export function custom_event__trigger(
	node,
	event_name,
	custom_event_init
) {
	const event = new CustomEvent(event_name, assign(
		{ bubbles: true },
		custom_event_init))
	node.dispatchEvent(event)
	return event
}
