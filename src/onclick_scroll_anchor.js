import { scroll_anchor } from './scroll_anchor';
export function onclick_scroll_anchor(event, root) {
    event.preventDefault();
    const { currentTarget } = event;
    const href = currentTarget.getAttribute('href');
    scroll_anchor(href, root);
}
//# sourceMappingURL=src/onclick_scroll_anchor.js.map