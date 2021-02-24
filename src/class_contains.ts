export function class_contains(el:HTMLElement, class_name:string):boolean {
	return el.classList.contains(class_name)
}
export {
	class_contains as contains__class,
	class_contains as has__class,
}
