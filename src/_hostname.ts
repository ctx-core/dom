export function _hostname(): string|null {
	return typeof window === 'object' ? window.location.hostname : null
}
