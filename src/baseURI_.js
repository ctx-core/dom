export function baseURI_() {
    let baseURI = document.baseURI;
    if (!baseURI) {
        const baseTags = document.getElementsByTagName('base');
        baseURI = baseTags.length ? baseTags[0].href : document.URL;
    }
    return baseURI;
}
export { baseURI_ as _baseURI, };
//# sourceMappingURL=src/baseURI_.js.map