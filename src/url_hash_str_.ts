export function url_hash_str_(url:string) {
	const hash_index = url.indexOf('#')
	const string_url_hash =
		hash_index != -1
		? url.substring(hash_index + 1)
		: ''
	return string_url_hash
}
export {
	url_hash_str_ as _url_hash_str,
	url_hash_str_ as $hash__url__string,
}
