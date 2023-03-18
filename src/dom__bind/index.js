import { assign, be_ } from '@ctx-core/object'
import { parent__el_a_ } from '../parent__el_a_/index.js'
const dom__bind__called_sym = Symbol.for('dom__bind__called')
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').dom__handler_T}dom__handler_T */
/** @typedef {import('./index.d.ts').id__dom__handler_T}id__dom__handler_T */
/** @typedef {import('./index.d.ts').unbind__event_T}unbind__event_T */
/** @type {Be<Map<string, id__dom__handler_T>>} */
const dom__handler__id_M_id__dom__handler_ = be_('dom__handler__id_M_id__dom__handler_', ()=>
	new Map())
/** @type {Be<Map<id__dom__handler_T, number>>} */
const id__dom__handler_M_call_count_ = be_('id__dom__handler_M_call_count_', ()=>
	new Map())
/**
 * @param {Ctx}ctx
 * @param {Element|Document}[parent]
 */
export function dom__bind(ctx, parent = document) {
	/** @type {HTMLElement[]|SVGElement[]} */
	const parent__el_a = /** @type {any} */parent__el_a_('[data-onbind]', parent)
	const dom__handler__id_M_id__dom__handler =
		dom__handler__id_M_id__dom__handler_(ctx)
	const id__dom__handler_M_call_count =
		id__dom__handler_M_call_count_(ctx)
	for (let parent__el_a__i = 0; parent__el_a__i < parent__el_a.length; parent__el_a__i++) {
		const el = parent__el_a[parent__el_a__i]
		if (el[dom__bind__called_sym]) continue
		const dom__handler__id = el.dataset.onbind
		const id__dom__handler =
			dom__handler__id_M_id__dom__handler.get(dom__handler__id)
		if (!id__dom__handler) {
			console.error({ el })
			dom__onbind__register__validate__throw('dom__bind', dom__handler__id)
		}
		id__dom__handler_M_call_count.set(
			id__dom__handler,
			id__dom__handler_M_call_count.get(id__dom__handler) + 1)
		id__dom__handler(el, ctx)
		el[dom__bind__called_sym] = true
	}
}
export {
	dom__bind as bind_dom,
}
/**
 * @param {Ctx}ctx
 * @param {Element|Document}[parent]
 */
export function dom__unbind(ctx, parent = document) {
	const parent__el_a = /** @type {any} */parent__el_a_('[data-onbind]', parent)
	const event = new CustomEvent('unbind', {
		detail: { ctx }
	})
	for (let parent__el_a__i = 0; parent__el_a__i < parent__el_a.length; parent__el_a__i++) {
		const el = parent__el_a[parent__el_a__i]
		el.dispatchEvent(event)
	}
}
/**
 * @param {Element}el
 * @param {(evt:unbind__event_T)=>any}onunbind
 */
export function unbind__add(el, onunbind) {
	el.addEventListener('unbind', onunbind)
}
/**
 * @param {Element}el
 * @param {(evt:unbind__event_T)=>any}onunbind
 */
export function unbind__remove(el, onunbind) {
	el.removeEventListener('unbind', onunbind)
}
/**
 * @param {Element}el
 * @param {Ctx}[ctx]
 */
export function unbind__dispatch(el, ctx) {
  const event = new CustomEvent('unbind', {
		detail: { ctx }
	})
	el.dispatchEvent(event)
}
/**
 * @param {string}id
 * @param {dom__handler_T}dom__handler
 * @returns {id__dom__handler_T}
 * @private
 */
export function id__dom__handler_(id, dom__handler) {
	Object.defineProperty(id__dom__handler, 'id', {
		value: id,
		writable: false,
	})
	assign(id__dom__handler, {
		toString() { return id }
	})
	return id__dom__handler
	function id__dom__handler(el, ctx) {
		dom__handler(el, ctx)
	}
}
export {
	id__dom__handler_ as id__bind_dom_,
	id__dom__handler_ as bind_dom_,
}
/**
 * @param {Ctx}ctx
 * @param {id__dom__handler_T|string}id__dom__handler_or_dom__handler__id
 * @param {id__dom__handler_T}[id__dom__handler]
 */
export function dom__onbind__register(
	ctx,
	id__dom__handler_or_dom__handler__id,
	id__dom__handler
) {
	const dom__handler__id =
		typeof id__dom__handler_or_dom__handler__id === 'string'
		? id__dom__handler_or_dom__handler__id
		: id__dom__handler_or_dom__handler__id.id
	if (!dom__handler__id) {
		throw new Error(
			`dom__onbind__register: id__dom__handler.id or dom__handler__id is required: dom__handler__id: ${
				JSON.stringify(dom__handler__id)}`)
	}
	if (typeof id__dom__handler_or_dom__handler__id === 'function') {
		id__dom__handler = id__dom__handler_or_dom__handler__id
	}
	dom__handler__id_M_id__dom__handler_(ctx).set(dom__handler__id, id__dom__handler)
	id__dom__handler_M_call_count_(ctx).set(id__dom__handler, 0)
}
export {
	dom__onbind__register as bind_dom__register,
}
/**
 * @param {Ctx}ctx
 * @param {string}[dom__handler__id]
 */
export function dom__onbind__validate(ctx, dom__handler__id) {
	const dom__handler__id_M_id__dom__handler = dom__handler__id_M_id__dom__handler_(ctx)
	if (dom__handler__id) {
		if (!dom__handler__id_M_id__dom__handler.get(dom__handler__id)) {
			dom__onbind__register__validate__throw('dom__onbind__validate', dom__handler__id)
		}
	} else {
		const id__dom__handler_M_call_count =
			id__dom__handler_M_call_count_(ctx)
		for (const [
			dom__handler__id,
			id__dom__handler
		] of dom__handler__id_M_id__dom__handler.entries()) {
			if (!id__dom__handler_M_call_count.get(id__dom__handler)) {
				dom__onbind__call_count__validate__throw(dom__handler__id)
			}
		}
	}
}
export {
	dom__onbind__validate as bind_dom__validate
}
/**
 * @param {string}fn_name
 * @param {string}dom__handler__id
 */
function dom__onbind__register__validate__throw(fn_name, dom__handler__id) {
	throw new Error(`${fn_name}: dom__handler__id ${
		JSON.stringify(dom__handler__id)} not registered: ${''
	}use dom__onbind__register or make sure the data-onbind html attribute is correct`)
}
/**
 * @param {string}dom__handler__id
 */
function dom__onbind__call_count__validate__throw(dom__handler__id) {
	const dom__handler__id__json = JSON.stringify(dom__handler__id)
	throw new Error(
		`dom__onbind__call_count: dom__handler__id ${
			dom__handler__id__json} registered & not called:${' '
		}please remove the call to${' '
		}dom__onbind__register(ctx, ${dom__handler__id}) or${' '
		}dom__onbind__register(ctx, ${dom__handler__id__json}, ${dom__handler__id})`)
}
