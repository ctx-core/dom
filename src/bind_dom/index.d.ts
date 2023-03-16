import type { Ctx } from '@ctx-core/object'
export declare function bind_dom<
	E extends Element = Element
>(ctx:Ctx, parent?:E):void
export declare function id__bind_dom_<
	E extends Element = Element
>(id:string, bind_dom:arg1__bind_dom_T<E>):arg1__id__bind_dom_T<E>
export declare function id__bind_dom_<
	E extends Element = Element
>(id:string, bind_dom:arg2__bind_dom_T<E>):arg2__id__bind_dom_T<E>
export {
	id__bind_dom_ as bind_dom_,
}
export declare function bind_dom__register(ctx:Ctx, bind_dom:bind_dom_T):void
export declare function bind_dom__register(ctx:Ctx, bind_dom_name:string, bind_dom:bind_dom_T):void
export declare function bind_dom__validate(ctx:Ctx, bind_dom_name?:string):void
export type arg1__bind_dom_T<
	E extends Element = Element
> = (el:E)=>void
export type arg2__bind_dom_T<
	E extends Element = Element
> = (el:E, ctx:Ctx)=>void
export type bind_dom_T<
	E extends Element = Element
> = arg1__bind_dom_T<E>|arg2__bind_dom_T<E>
export type arg1__id__bind_dom_T<
	E extends Element = Element
> = ((el:E)=>void)&{ id:string }
export type arg2__id__bind_dom_T<
	E extends Element = Element
> = ((el:E, ctx:Ctx)=>void)&{ id:string }
export type id__bind_dom_T<
	E extends Element = Element
> = arg1__id__bind_dom_T<E>|arg2__id__bind_dom_T<E>
