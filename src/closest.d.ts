import type { selector_T } from './selector_T';
/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export declare function closest(selector: selector_T, element: HTMLElement, self_check?: boolean): (Node & ParentNode) | undefined;
