export function offset_bcr_(node) {
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = node;
    return {
        top: offsetTop,
        right: offsetLeft + offsetWidth,
        bottom: offsetTop + offsetHeight,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth,
        x: offsetLeft,
        y: offsetTop,
    };
}
export { offset_bcr_ as _offset_bcr, offset_bcr_ as _bcr__offset, };
//# sourceMappingURL=src/offset_bcr_.js.map