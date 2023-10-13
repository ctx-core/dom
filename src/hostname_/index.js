/**
 * @returns {string|null}
 * @private
 */
export function hostname_() {
	return typeof globalThis['window'] === 'object' ? window.location.hostname : null
}
export { hostname_ as _hostname, }

