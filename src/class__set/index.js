/**
 * @param {HTMLElement}el
 * @param {string}class_name
 * @param {boolean}value
 * @private
 */
export function class__set(
	el,
	class_name,
	value
) {
	const { classList } = el
	if (value) {
		classList.add(class_name)
	} else {
		classList.remove(class_name)
	}
}
export {
	class__set as set_class,
	class__set as set__class,
}
