import { Writable } from 'svelte/store';
import { falsy } from '@ctx-core/function';
export interface Writable__scrollY__window extends Writable<falsy | number> {
    reset__scrollY__window: () => void;
}
export declare const b__scrollY__window: (ctx?: any, opts?: any) => Writable__scrollY__window;
export declare const __scrollY__window: Writable__scrollY__window;
export declare const reset__scrollY__window: () => void;
export declare const b__h1__body_class: (ctx?: any, opts?: any) => Writable<{}>;
export declare const __h1__body_class: Writable<{}>;
export interface Writable__h1__body_class__h0__or_a1 extends Writable<any> {
    add__or_a1__body_class: (class__: string, member: string) => any;
    remove__or_a1__body_class: (class__: string, member: string) => any;
}
export declare const b__h1__body_class__h0__or_a1: (ctx?: any, opts?: any) => Writable__h1__body_class__h0__or_a1;
export declare const __h1__body_class__h0__or_a1: Writable__h1__body_class__h0__or_a1;
export declare const add__or_a1__body_class: (class__: string, member: string) => any, remove__or_a1__body_class: (class__: string, member: string) => any;
export declare const b__class__body: (ctx?: any, opts?: any) => import("svelte/store").Readable<string>;
export declare const __class__body: import("svelte/store").Readable<string>;
