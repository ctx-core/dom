/**
 * @param {HTMLElement}el
 * @param {string}class_name
 * @returns {boolean}
 */
export function class__toggle(el, class_name) {
	return el.classList.toggle(class_name)
}
export {
	class__toggle as toggle_class,
	class__toggle as toggle__class,
}
