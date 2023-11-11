/**
 * @param {HTMLElement}el
 * @param {string}class_name
 * @returns {boolean}
 * @private
 */
export function class__contains(el, class_name) {
	return el.classList.contains(class_name)
}
export {
	class__contains as class_contains,
	class__contains as contains__class,
	class__contains as has__class,
}
