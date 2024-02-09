import type { wide_ctx_T } from 'ctx-core/be'
export declare function dom__bind<
	E extends Element = Element,
	ns_T extends string = ''
>(ctx:wide_ctx_T<ns_T>, parent?:E):void
export declare function dom__unbind<
	E extends Element = Element,
	ns_T extends string = ''
>(ctx:wide_ctx_T<ns_T>, parent?:E):void
export declare function unbind__add<ns_T extends string = ''>(
	el:Element,
	onunbind:(evt:unbind__event_T<ns_T>)=>unknown
):void
export declare function unbind__remove<ns_T extends string = ''>(
	el:Element,
	onunbind:(evt:unbind__event_T<ns_T>)=>unknown
):void
export declare function unbind__dispatch<ns_T extends string = ''>(
	el:Element,
	ctx?:wide_ctx_T<ns_T>
):void
export declare function id__dom__handler_<
	E extends Element = Element,
	I extends string = string
>(
	id:I,
	dom__handler:arg1__dom__handler_T<E>
):arg1__id__dom__handler_T<E, I>
export declare function id__dom__handler_<
	E extends Element = Element,
	I extends string = string,
	ns_T extends string = ''
>(
	id:I,
	dom__handler:arg2__dom__handler_T<E, ns_T>
):arg2__id__dom__handler_T<E, I, ns_T>
export declare function dom__onbind__register<ns_T extends string = ''>(
	ctx:wide_ctx_T<ns_T>,
	dom__onbind:dom__handler_T
):void
export declare function dom__onbind__register<ns_T extends string = ''>(
	ctx:wide_ctx_T<ns_T>,
	dom__onbind__id:string,
	dom__onbind:dom__handler_T
):void
export declare function dom__onbind__validate<ns_T extends string = ''>(
	ctx:wide_ctx_T<ns_T>
):void
export declare function dom__onbind__validate<ns_T extends string = ''>(
	ctx:wide_ctx_T<ns_T>,
	dom__onbind__id:string
):void
export declare function dom__onbind__validate<ns_T extends string = ''>(
	ctx:wide_ctx_T<ns_T>,
	id__dom__onbind:id__dom__handler_T<Element, string, ns_T>
):void
export type arg1__dom__handler_T<
	E extends Element = Element
> = (el:E)=>void
export type arg2__dom__handler_T<
	E extends Element = Element,
	ns_T extends string = ''
> = (el:E, ctx:wide_ctx_T<ns_T>)=>void
export type dom__handler_T<
	E extends Element = Element,
	ns_T extends string = ''
> = arg1__dom__handler_T<E>|arg2__dom__handler_T<E, ns_T>
export type arg1__id__dom__handler_T<
	E extends Element = Element,
	I extends string = string
> = ((el:E)=>void)&{ id:I }
export type arg2__id__dom__handler_T<
	E extends Element = Element,
	I extends string = string,
	ns_T extends string = ''
> = ((el:E, ctx:wide_ctx_T<ns_T>)=>void)&{ id:I }
export type id__dom__handler_T<
	E extends Element = Element,
	I extends string = string,
	ns_T extends string = ''
> = arg1__id__dom__handler_T<E, I>|arg2__id__dom__handler_T<E, I, ns_T>
export type unbind__event_T<ns_T extends string = ''> =
	CustomEvent<{ ctx?:wide_ctx_T<ns_T> }>
