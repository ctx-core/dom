export function addEvent(el:Element, type:string, fn:EventListenerOrEventListenerObject):void {
	if (el.addEventListener)
		el.addEventListener(type, fn, false)
	else
		(el as any).attachEvent(`on${type}`, fn)
}
