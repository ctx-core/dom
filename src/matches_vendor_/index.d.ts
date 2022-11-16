export declare function matches_vendor_():((selectors:string)=>boolean)|undefined
export interface ProtoElement extends Element {
	matchesSelector(selectors:string):boolean
	mozMatchesSelector(selectors:string):boolean
	msMatchesSelector(selectors:string):boolean
	oMatchesSelector(selectors:string):boolean
}
export { matches_vendor_ as _matches_vendor, }
