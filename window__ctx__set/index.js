import { flatten, isArray } from '@ctx-core/function'
import { has_dom } from '../has_dom/index.js'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('@ctx-core/object').MapCtx} */
/** @typedef {import('@ctx-core/object').NestedMapCtx} */
/**
 * @param {Ctx}ctx
 */
export function window__ctx__set(ctx) {
	if (has_dom) {
		window.ctx = ctx
		window.ctx_get = (ctx_or_key, _key)=>{
			const ctx = _key ? ctx_or_key : window.ctx
			const key = _key ? _key : /** @type {string} */ctx_or_key
			if (isArray(ctx)) {
				for (const _ctx of flatten(/** @type {MapCtx} */ctx)) {
					const ctx = _ctx
					return ctx.get(key)
				}
			} else {
				return ctx.get(key)
			}
		}
		window.ctx_get$ = (ctx_or_key, _key)=>{
			const ctx = (_key && ctx_or_key) ? ctx_or_key : window.ctx
			const key = _key ? _key : /** @type {string} */ctx_or_key
			if (isArray(ctx)) {
				for (const _ctx of flatten(/** @type {NestedMapCtx} */ctx)) {
					const ctx = /** @type {MapCtx} */_ctx
					if (ctx.has(key)) {
						return ctx.get(key)
					}
				}
			} else {
				return (/** @type {MapCtx} */ctx).get(key)
			}
		}
	}
}
