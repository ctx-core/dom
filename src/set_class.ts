export function set_class(el:HTMLElement, class_name:string, value:boolean):void {
	let op = value ? 'add' : 'remove'
	return el.classList[op](class_name)
}
export {
	set_class as set__class
}
