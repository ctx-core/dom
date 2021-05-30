export function hostname_(): string|null {
	return typeof window === 'object' ? window.location.hostname : null
}
export {
	hostname_ as _hostname,
}
