export function BoundingClientRect_(el) {
    const { top, bottom, left, right, height, width, } = el.getBoundingClientRect();
    return { top, bottom, left, right, height, width };
}
export { BoundingClientRect_ as _BoundingClientRect, };
//# sourceMappingURL=src/bounding_client_rect_.js.map