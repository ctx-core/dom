export function position_offset_(el) {
    let top = 0;
    let left = 0;
    do {
        top += el.offsetTop || 0;
        left += el.offsetLeft || 0;
        el = el.offsetParent;
    } while (el);
    return { top, left };
}
export { position_offset_ as _position_offset, };
//# sourceMappingURL=src/position_offset_.js.map