"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__click__anchor__scroll = exports.scrollIntoView__child__collection = exports.anchor__scroll = exports.scrollTop = void 0;
const logger_1 = require("@ctx-core/logger");
const _no__dom_1 = require("./_no__dom");
const _dom_1 = require("./_dom");
const logPrefix = '@ctx-core/dom/scroll';
/**
 * Scroll to the top of the parentElement
 * @param {Node} el
 * @param {boolean=} scrollWindow=true
 * @returns {Node}
 */
function scrollTop(el, scrollWindow = true) {
    logger_1.log(`${logPrefix}|scrollTop`);
    if (_no__dom_1._no__dom())
        return el;
    if (scrollWindow)
        window.scrollTo(0, 0);
    el.scrollTop = 0;
    const { parentElement } = el;
    if (parentElement)
        scrollTop(parentElement, false);
    return el;
}
exports.scrollTop = scrollTop;
function anchor__scroll(href, root) {
    const target__href = _dom_1._dom(href, root);
    if (target__href) {
        target__href.scrollIntoView();
        window.location.hash = href;
    }
}
exports.anchor__scroll = anchor__scroll;
function scrollIntoView__child__collection(parent, child) {
    const { top, height } = parent.getBoundingClientRect();
    const bottom = top + height;
    const { top: top__child, height: height__child } = child.getBoundingClientRect();
    const bottom__child = top__child + height__child;
    if (top__child < top) {
        child.scrollIntoView(true);
    }
    else if (bottom__child > bottom) {
        child.scrollIntoView({ block: 'end' });
    }
}
exports.scrollIntoView__child__collection = scrollIntoView__child__collection;
function __click__anchor__scroll(event, root) {
    logger_1.log(`${logPrefix}|__click__anchor__scroll`, event);
    event.preventDefault();
    const { currentTarget } = event;
    const href = currentTarget.getAttribute('href');
    anchor__scroll(href, root);
}
exports.__click__anchor__scroll = __click__anchor__scroll;
