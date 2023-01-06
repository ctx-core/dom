export function set_class(el, class_name, value) {
	const { classList } = el
	if (value) {
		classList.add(class_name)
	} else {
		classList.remove(class_name)
	}
}
export { set_class as set__class }
