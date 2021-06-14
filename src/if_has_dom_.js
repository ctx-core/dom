import { has_dom } from './has_dom';
export function if_has_dom_(fn) {
    return (...args) => has_dom && fn(...args);
}
export { if_has_dom_ as _if_has_dom, if_has_dom_ as _if__has__dom, };
//# sourceMappingURL=src/if_has_dom_.js.map