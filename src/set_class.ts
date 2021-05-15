export function set_class(el:HTMLElement, class_name:string, value:boolean):void {
	const { classList } = el
	if (value) {
		classList.add(class_name)
	} else {
		classList.remove(class_name)
	}
}
export {
	set_class as set__class
}
