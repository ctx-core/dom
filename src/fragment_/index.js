const document = globalThis['document']
/**
 * @param {string}html
 * @returns {DocumentFragment}
 * @private
 */
export function fragment_(html) {
	const frag = document.createDocumentFragment()
	const temp = document.createElement('div')
	temp.innerHTML = html
	while (temp.firstChild) {
		frag.appendChild(temp.firstChild)
	}
	return frag
}
