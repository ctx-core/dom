export function baseURI_():string {
	let baseURI = document.baseURI
	if (!baseURI) {
		const baseTags = document.getElementsByTagName('base')
		baseURI = baseTags.length ? baseTags[0].href : document.URL
	}
	return baseURI
}
export {
	baseURI_ as _baseURI,
}
