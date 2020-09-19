import type { maybe_null } from '@ctx-core/function';
export declare function _hostname(): maybe_null<string>;
/**
 * Remove hash from `window.location.href` without refreshing the page
 */
export declare function empty__location__window(): void;
/**
 * Returns an query__hash__location
 * @example
 * $query__hash__location({
 *	 id: parseInt
 * })
 */
export declare function _query__hash__location(ctx__transform: any): {};
export declare const $query__hash__location: typeof _query__hash__location;
export declare function _hash__url__string(url: any): any;
export declare const $hash__url__string: typeof _hash__url__string;
