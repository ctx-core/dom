/**
 * The constructor for DOM element element_name
 */
export function element_constructor(element_name:string):Function {
	return document.createElement(element_name).constructor
}
export {
	element_constructor as constructor__element
}
