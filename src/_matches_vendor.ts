let proto:ProtoElement
export function _matches_vendor() {
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
