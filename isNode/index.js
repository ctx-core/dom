/**
 * Returns true if it is a DOM node
 * @param {any}val
 * @returns {boolean}
 * @see {@link http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object}
 * @private
 */
export function isNode(val) {
	return (
		typeof Node === 'object'
		? val instanceof Node
		: val
			&& typeof val === 'object'
			&& typeof val.nodeType === 'number'
			&& typeof val.nodeName === 'string'
	)
}

