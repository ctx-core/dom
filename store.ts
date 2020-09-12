import { Writable, writable, derived, get } from 'svelte/store'
// @ts-ignore
import { subscribe__debug } from '@ctx-core/store'
import { _b, assign, clone } from '@ctx-core/object'
import { _h1__present__a1 } from '@ctx-core/data'
import { _class } from '@ctx-core/html'
import type { falsy } from '@ctx-core/function'
export interface Writable__scrollY__window extends Writable<falsy|number> {
	reset__scrollY__window:()=>void
}
export const b__scrollY__window = _b<Writable__scrollY__window>('__scrollY__window', ()=>{
	const __scrollY__window = writable(null)
	return assign(__scrollY__window, {
		reset__scrollY__window,
	})
	function reset__scrollY__window() {
		__scrollY__window.set(window.scrollY)
	}
})
export const __scrollY__window = b__scrollY__window()
export const {
	reset__scrollY__window,
} = __scrollY__window
export const b__h1__body_class = _b('__h1__body_class', ()=>
	writable({}))
export const __h1__body_class = b__h1__body_class()
export interface Writable__h1__body_class__h0__or_a1 extends Writable<any> {
	add__or_a1__body_class:(class__:string, member:string)=>any
	remove__or_a1__body_class:(class__:string, member:string)=>any
}
export const b__h1__body_class__h0__or_a1 = _b<Writable__h1__body_class__h0__or_a1>('__h1__body_class__h0__or_a1', ()=>{
	const __h1__body_class__h0__or_a1 = writable({})
	return assign(__h1__body_class__h0__or_a1, {
		add__or_a1__body_class,
		remove__or_a1__body_class,
	})
	function add__or_a1__body_class(class__, member) {
		const h1__body_class__h0__or_a1__ = get(__h1__body_class__h0__or_a1)
		const or_a1__ = h1__body_class__h0__or_a1__[class__]
		if (or_a1__ && or_a1__.indexOf(member) > -1) {
			return h1__body_class__h0__or_a1__
		}
		const or_a1 = or_a1__ ? or_a1__.slice : []
		or_a1.push(member)
		const h1__body_class__h0__or_a1 =
			clone(
				h1__body_class__h0__or_a1__,
				{
					[class__]: or_a1,
				}
			)
		__h1__body_class__h0__or_a1.set(h1__body_class__h0__or_a1)
		return h1__body_class__h0__or_a1
	}
	function remove__or_a1__body_class(class__, member) {
		const h1__body_class__h0__or_a1__ = get(__h1__body_class__h0__or_a1)
		const or_a1__ = h1__body_class__h0__or_a1__[class__]
		const idx = or_a1__ && or_a1__.indexOf(member)
		if (typeof idx !== 'number' || idx === -1) {
			return h1__body_class__h0__or_a1__
		}
		const or_a1 = or_a1__.slice()
		or_a1.splice(idx, 1)
		const h1__body_class__h0__or_a1 =
			clone(
				h1__body_class__h0__or_a1__,
				{
					[member]: or_a1,
				}
			)
		__h1__body_class__h0__or_a1.set(h1__body_class__h0__or_a1)
		return h1__body_class__h0__or_a1
	}
})
export const __h1__body_class__h0__or_a1 = b__h1__body_class__h0__or_a1()
export const {
	add__or_a1__body_class,
	remove__or_a1__body_class,
} = __h1__body_class__h0__or_a1
export const b__class__body = _b('__class__body', ctx=>
	derived([
			b__h1__body_class__h0__or_a1(ctx),
			b__h1__body_class(ctx),
		], (
		[
			h1__body_class__h0__or_a1,
			h1__body_class,
		])=>
			_class(
				assign(
					_h1__present__a1(h1__body_class__h0__or_a1),
					h1__body_class))
	))
export const __class__body = b__class__body()
