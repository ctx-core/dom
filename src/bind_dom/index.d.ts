import type { Ctx } from '@ctx-core/object'
export declare function bind_dom<
	E extends Element = Element
>(ctx:Ctx, parent?:E):void
export declare function id__bind_dom_<
	E extends Element = Element
>(id:string, bind_dom:bind_dom_T):id__bind_dom_T
export {
	id__bind_dom_ as bind_dom_,
}
export declare function bind_dom__register(ctx:Ctx, bind_dom:bind_dom_T):void
export declare function bind_dom__register(ctx:Ctx, bind_dom_name:string, bind_dom:bind_dom_T):void
export declare function bind_dom__validate(ctx:Ctx, bind_dom_name?:string):void
export type bind_dom_T<
	E extends Element = Element
> = ((el:E, ctx?:Ctx)=>void)|((el:E)=>void)
export type id__bind_dom_T = bind_dom_T&{ id:string }
