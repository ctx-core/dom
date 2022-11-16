import { has_dom } from '../has_dom/index.js'
export function global_() {
	return has_dom ? window : global
}
export { global_ as _global, }

