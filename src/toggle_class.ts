export function toggle_class(el:HTMLElement, class_name:string):boolean {
	return el.classList.toggle(class_name)
}
export {
	toggle_class as toggle__class
}
