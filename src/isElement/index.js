/**
 * Returns true if it is a DOM element
 * @see {@link http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object}
 */
export function index(obj) {
	return (
		typeof HTMLElement === 'object'
		? obj instanceof HTMLElement
		: obj
			&& typeof obj === 'object'
			&& obj !== null
			&& obj.nodeType === 1
			&& typeof obj.nodeName === 'string'
	)
}

