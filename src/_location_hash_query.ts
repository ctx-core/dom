import { assign } from '@ctx-core/object'
import { _url_hash_str } from './_url_hash_str'
/**
 * Returns an query__hash__location
 * @example
 * $query__hash__location({
 *	 id: parseInt
 * })
 */
export function _location_hash_query(transform_ctx:Record<string, (value:any, key?:string)=>number>) {
	transform_ctx = assign({ row_id: (value:string)=>parseFloat(value) }, transform_ctx)
	const url_hash_str = _url_hash_str(window.location.href)
	const decoded_url_hash_str =
		decodeURIComponent(url_hash_str) as string
	let location_hash_query:Record<string, any> = {}
	let location_hash_query_a1:string[]
	if (decoded_url_hash_str) {
		location_hash_query_a1 = decoded_url_hash_str.split('&') as string[]
		decodeURIComponent_location_hash_query()
		split_location_hash_query()
		reduce(location_hash_query_a1)
	}
	return location_hash_query
	function decodeURIComponent_location_hash_query() {
		let out_location_hash_query_a1 = [] as string[]
		for (let i = 0; i < location_hash_query_a1.length; i++) {
			out_location_hash_query_a1.push(
				decodeURIComponent(location_hash_query_a1[i]))
		}
		location_hash_query_a1 = out_location_hash_query_a1
		return out_location_hash_query_a1
	}
	function split_location_hash_query() {
		let out_location_hash_query_a1 = [] as string[]
		for (let i = 0; i < location_hash_query_a1.length; i++) {
			const uriComponent = location_hash_query_a1[i]
			out_location_hash_query_a1.push(
				uriComponent.split('=')[0])
		}
		location_hash_query_a1 = out_location_hash_query_a1
		return out_location_hash_query_a1
	}
	function reduce(in_location_hash_query_a1:string[]) {
		for (let i = 0; i < in_location_hash_query_a1.length; i++) {
			const uriPart_a1 = in_location_hash_query_a1[i]
			const key = uriPart_a1[0]
			const value = uriPart_a1[1]
			const transform = transform_ctx[key]
			const value_transform =
				transform
				? transform(value, key)
				: value
			location_hash_query[key] = value_transform
		}
		return location_hash_query
	}
}
export {
	_location_hash_query as $query__hash__location
}
