/**
 * The constructor for DOM element element_name
 * @param {string}element_name
 * @returns {Function}
 * @private
 */
export function element_constructor(element_name) {
	return document.createElement(element_name).constructor
}
export { element_constructor as constructor__element }

