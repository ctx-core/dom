/**
 * Returns true if it is a DOM element
 * {any}val
 * @see {@link http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object}
 * @private
 */
export function index(val) {
	return (
		typeof HTMLElement === 'object'
		? val instanceof HTMLElement
		: val
			&& typeof val === 'object'
			&& val !== null
			&& val.nodeType === 1
			&& typeof val.nodeName === 'string'
	)
}

