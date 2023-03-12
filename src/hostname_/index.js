/**
 * @returns {string|null}
 * @private
 */
export function hostname_() {
	return typeof window === 'object' ? window.location.hostname : null
}
export { hostname_ as _hostname, }

