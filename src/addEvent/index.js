export function addEvent(el, type, fn) {
	if (el.addEventListener) el.addEventListener(type, fn, false)
	else el.attachEvent(`on${type}`, fn)
}

