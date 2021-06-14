export function trigger_native_event(node, event_name, bubbles = true, cancelable = false) {
    const event = document.createEvent('HTMLEvents');
    event.initEvent(event_name, bubbles, cancelable);
    node.dispatchEvent(event);
    return event;
}
export { trigger_native_event as trigger__native_event };
//# sourceMappingURL=src/trigger_native_event.js.map