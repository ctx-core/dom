/**
 * @param {HTMLElement}el
 * @param {string}class_name
 * @private
 */
export function class__add(el, class_name) {
	return el.classList.add(class_name)
}
export { 
	class__add as add_class,
	class__add as add__class, 
}
