export declare function _matches_vendor(): ((selectors: string) => boolean) | undefined;
export interface ProtoElement extends Element {
    matchesSelector(selectors: string): boolean;
    mozMatchesSelector(selectors: string): boolean;
    msMatchesSelector(selectors: string): boolean;
    oMatchesSelector(selectors: string): boolean;
}
