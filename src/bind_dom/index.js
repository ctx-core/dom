import { be_ } from '@ctx-core/object'
import { parent__el_a_ } from '../parent__el_a_/index.js'
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').bind_dom_T}bind_dom_T */
/** @type {Be<Map<string, bind_dom_T>>} */
const bind_dom_name_M_bind_dom_ = be_('bind_dom_name_M_bind_dom_', ()=>
	new Map())
/** @type {Be<Map<bind_dom_T, number>>} */
const bind_dom_M_call_count_ = be_('bind_dom_M_call_count_', ()=>
	new Map())
/**
 * @param {Ctx}ctx
 * @param {Element}[parent]
 */
export function bind_dom(ctx, parent = document) {
	/** @type {HTMLElement[]|SVGElement[]} */
	const parent__el_a = parent__el_a_('[data-bind_dom]', parent)
	const bind_dom_name_M_bind_dom = bind_dom_name_M_bind_dom_(ctx)
	const bind_dom_M_call_count = bind_dom_M_call_count_(ctx)
	for (const el of parent__el_a) {
		const bind_dom_id = el.dataset.bind_dom
		const _bind_dom = bind_dom_name_M_bind_dom.get(bind_dom_id)
		if (!_bind_dom) bind_dom__register__validate__throw(bind_dom_id)
		bind_dom_M_call_count.set(
			_bind_dom,
			bind_dom_M_call_count.get(_bind_dom) + 1)
		_bind_dom(el, ctx)
	}
}
/**
 * @param {Ctx}ctx
 * @param {bind_dom_T|string}bind_dom_id
 * @param {bind_dom_T}[bind_dom]
 */
export function bind_dom__register(
	ctx,
	bind_dom_or_bind_dom_id,
	bind_dom
) {
	const bind_dom_id =
		typeof bind_dom_or_bind_dom_id === 'string'
		? bind_dom_or_bind_dom_id
		: bind_dom_or_bind_dom_id.name
	if (typeof bind_dom_or_bind_dom_id === 'function') {
		bind_dom = bind_dom_or_bind_dom_id
	}
	bind_dom_name_M_bind_dom_(ctx).set(bind_dom_id, bind_dom)
	bind_dom_M_call_count_(ctx).set(bind_dom, 0)
}
/**
 * @param {Ctx}ctx
 * @param {string}[bind_dom_id]
 */
export function bind_dom__validate(ctx, bind_dom_id) {
	const bind_dom_name_M_bind_dom = bind_dom_name_M_bind_dom_(ctx)
	if (bind_dom_id) {
		if (!bind_dom_name_M_bind_dom.get(bind_dom_id)) {
			bind_dom__register__validate__throw(bind_dom_id)
		}
	} else {
		const bind_dom_M_call_count = bind_dom_M_call_count_(ctx)
		for (const bind_dom of bind_dom_name_M_bind_dom.values()) {
			if (!bind_dom_M_call_count.get(bind_dom)) {
				bind_dom__call_count__validate__throw(bind_dom_id)
			}
		}
	}
}
/**
 * @param {string}bind_dom_id
 */
function bind_dom__register__validate__throw(bind_dom_id) {
	throw new Error(`bind_dom__register: bind_dom_id ${
		JSON.stringify(bind_dom_id)} not registered: ${''
	}use bind_dom__register or make sure the data-bind_dom html attribute is correct`)
}
/**
 * @param {string}bind_dom_id
 */
function bind_dom__call_count__validate__throw(bind_dom_id) {
	const bind_dom_id__json = JSON.stringify(bind_dom_id)
	throw new Error(`bind_dom__call_count: bind_dom_id ${
		bind_dom_id__json} registered & not called: ${''
	}please remove the call to bind_dom__register(ctx, ${bind_dom_id__json}, bind_dom)`)
}
