export function no_dom_():boolean {
	return typeof window === 'undefined'
}
export {
	no_dom_ as _no_dom,
	no_dom_ as _no__dom,
}
