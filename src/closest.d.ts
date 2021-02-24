/**
 * Returns the first matching dom element in el -> ...parent
 * @returns {*|Node}
 */
export declare function closest(selector: string, element: HTMLElement, self_check?: boolean): (Node & ParentNode) | undefined;
