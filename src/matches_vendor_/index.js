let proto
export function matches_vendor_() {
	if (!proto) {
		if (typeof Element === 'undefined') return
		proto = Element.prototype
	}
	return proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector
}
export { matches_vendor_ as _matches_vendor, }

