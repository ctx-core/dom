export function _url_hash_str(url:string) {
	const hash_index = url.indexOf('#')
	const string_url_hash =
		hash_index != -1
		? url.substring(hash_index + 1)
		: ''
	return string_url_hash
}
export {
	_url_hash_str as $hash__url__string
}
