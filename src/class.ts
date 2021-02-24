export function remove_class(el:HTMLElement, class_name:string):void {
	return el.classList.remove(class_name)
}
export {
	remove_class as remove__class
}
