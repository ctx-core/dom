import type { Ctx } from '@ctx-core/object'
export declare function bind_dom<
	E extends Element = Element
>(ctx:Ctx, parent?:E):void
export declare function bind_dom__register(ctx:Ctx, bind_dom:bind_dom_T):void
export declare function bind_dom__register(ctx:Ctx, bind_dom_id:string, bind_dom:bind_dom_T):void
export declare function bind_dom__validate(ctx:Ctx, bind_dom_id?:string):void
export type bind_dom_T<
	E extends Element = Element
> = ((el:E, ctx:Ctx)=>void)|((el:E)=>void)
