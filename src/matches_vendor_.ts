let proto:ProtoElement
export function matches_vendor_():((selectors: string) => boolean)|undefined {
	if (!proto) {
		if (typeof Element === 'undefined') return
		proto = Element.prototype as ProtoElement
	}
	return proto.matchesSelector
		|| proto.webkitMatchesSelector
		|| proto.mozMatchesSelector
		|| proto.msMatchesSelector
		|| proto.oMatchesSelector
}
export interface ProtoElement extends Element {
	matchesSelector(selectors: string): boolean
	mozMatchesSelector(selectors: string): boolean
	msMatchesSelector(selectors: string): boolean
	oMatchesSelector(selectors: string): boolean
}
export {
	matches_vendor_ as _matches_vendor,
}
