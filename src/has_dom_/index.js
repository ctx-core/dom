export function has_dom_() {
	return typeof globalThis['window'] === 'object'
}
export {
	has_dom_ as _has_dom,
	has_dom_ as _has__dom,
}
