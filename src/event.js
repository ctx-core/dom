export function trigger_custom_event(node, event_name, detail = {}) {
    let event;
    if (window.CustomEvent) {
        event = new CustomEvent(event_name, { detail });
    }
    else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(event_name, true, true, detail);
    }
    node.dispatchEvent(event);
    return event;
}
export { trigger_custom_event as trigger__custom_event };
//# sourceMappingURL=src/event.js.map