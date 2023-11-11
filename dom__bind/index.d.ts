import type { Ctx } from '@ctx-core/object'
export declare function dom__bind<
	E extends Element = Element
>(ctx:Ctx, parent?:E):void
export declare function dom__unbind<
	E extends Element = Element
>(ctx:Ctx, parent?:E):void
export declare function unbind__add(el:Element, onunbind:(evt:unbind__event_T)=>any):void
export declare function unbind__remove(el:Element, onunbind:(evt:unbind__event_T)=>any):void
export declare function unbind__dispatch(el:Element, ctx?:Ctx):void
export declare function id__dom__handler_<
	E extends Element = Element,
	I extends string = string
>(id:I, dom__handler:arg1__dom__handler_T<E>):arg1__id__dom__handler_T<E, I>
export declare function id__dom__handler_<
	E extends Element = Element,
	I extends string = string
>(id:I, dom__handler:arg2__dom__handler_T<E>):arg2__id__dom__handler_T<E, I>
export declare function dom__onbind__register(ctx:Ctx, dom__onbind:dom__handler_T):void
export declare function dom__onbind__register(
	ctx:Ctx,
	dom__onbind__id:string,
	dom__onbind:dom__handler_T):void
export declare function dom__onbind__validate(ctx:Ctx):void
export declare function dom__onbind__validate(ctx:Ctx, dom__onbind__id:string):void
export declare function dom__onbind__validate(ctx:Ctx, id__dom__onbind:id__dom__handler_T):void
export type arg1__dom__handler_T<
	E extends Element = Element
> = (el:E)=>void
export type arg2__dom__handler_T<
	E extends Element = Element
> = (el:E, ctx:Ctx)=>void
export type dom__handler_T<
	E extends Element = Element
> = arg1__dom__handler_T<E>|arg2__dom__handler_T<E>
export type arg1__id__dom__handler_T<
	E extends Element = Element,
	I extends string = string
> = ((el:E)=>void)&{ id:I }
export type arg2__id__dom__handler_T<
	E extends Element = Element,
	I extends string = string
> = ((el:E, ctx:Ctx)=>void)&{ id:I }
export type id__dom__handler_T<
	E extends Element = Element,
	I extends string = string
> = arg1__id__dom__handler_T<E, I>|arg2__id__dom__handler_T<E, I>
export type unbind__event_T = CustomEvent<{ ctx?:Ctx }>
