export function check_element(el) {
    const { checked } = el;
    if (!checked) {
        el.checked = true;
    }
    const click_event = document.createEvent('HTMLEvents');
    click_event.initEvent('click', true, false);
    el.dispatchEvent(click_event);
    if (!checked) {
        const change_event = document.createEvent('HTMLEvents');
        change_event.initEvent('change', true, false);
        el.dispatchEvent(change_event);
    }
    return el;
}
export { check_element as check__element };
//# sourceMappingURL=src/element.js.map