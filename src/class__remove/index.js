/**
 * @param {HTMLElement}el
 * @param {string}class_name
 * @private
 */
export function class__remove(el, class_name) {
	return el.classList.remove(class_name)
}
export {
	class__remove as remove_class,
	class__remove as remove__class,
}
