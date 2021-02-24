let proto
export function _matches_vendor() {
	if (!proto) {
		if (typeof Element === 'undefined') return
		proto = Element.prototype
	}
	return proto.matchesSelector
		|| proto.webkitMatchesSelector
		|| proto.mozMatchesSelector
		|| proto.msMatchesSelector
		|| proto.oMatchesSelector
}
