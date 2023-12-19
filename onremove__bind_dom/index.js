import { globalThis__prop__ensure } from 'ctx-core/object'
const el_M_mutation_observer = globalThis__prop__ensure(
	Symbol.for('el_M_mutation_observer'), ()=>new WeakMap())
/**
 * @param {Element}el
 * @param {(el:Element, mutation:MutationRecord)=>void}fn
 */
export function onremove__bind_dom(el, fn) {
	if (!el.parentNode) {
		throw new Error('el must have a parentNode')
	}
	const previous_mutation_observer =
		el_M_mutation_observer.get(el)
	if (previous_mutation_observer) previous_mutation_observer.disconnect()
	const mutation_observer = new MutationObserver(mutation_a=>{
		for (const mutation of mutation_a) {
			for (const removedNode of mutation.removedNodes) {
				if (removedNode === el) {
					fn(el, mutation)
					mutation_observer.disconnect()
					return
				}
			}
		}
	})
	mutation_observer.observe(el.parentNode, { childList: true, subtree: false })
	el_M_mutation_observer.set(el, mutation_observer)
}
