import { assign } from '@ctx-core/object';
import { url_hash_str_ } from './url_hash_str_';
/**
 * Returns an query__hash__location
 * @example
 * location_hash_query_({
 *	 id: parseInt
 * })
 */
export function location_hash_query_(transform_ctx) {
    transform_ctx = assign({ row_id: (value) => parseFloat(value) }, transform_ctx);
    const url_hash_str = url_hash_str_(window.location.href);
    const decoded_url_hash_str = decodeURIComponent(url_hash_str);
    let location_hash_query = {};
    let location_hash_query_a;
    if (decoded_url_hash_str) {
        location_hash_query_a = decoded_url_hash_str.split('&');
        decodeURIComponent_location_hash_query();
        split_location_hash_query();
        reduce(location_hash_query_a);
    }
    return location_hash_query;
    function decodeURIComponent_location_hash_query() {
        let out_location_hash_query_a = [];
        for (let i = 0; i < location_hash_query_a.length; i++) {
            out_location_hash_query_a.push(decodeURIComponent(location_hash_query_a[i]));
        }
        location_hash_query_a = out_location_hash_query_a;
        return out_location_hash_query_a;
    }
    function split_location_hash_query() {
        let out_location_hash_query_a = [];
        for (let i = 0; i < location_hash_query_a.length; i++) {
            const uriComponent = location_hash_query_a[i];
            out_location_hash_query_a.push(uriComponent.split('=')[0]);
        }
        location_hash_query_a = out_location_hash_query_a;
        return out_location_hash_query_a;
    }
    function reduce(in_location_hash_query_a) {
        for (let i = 0; i < in_location_hash_query_a.length; i++) {
            const uriPart_a = in_location_hash_query_a[i];
            const key = uriPart_a[0];
            const value = uriPart_a[1];
            const transform = transform_ctx[key];
            const value_transform = transform
                ? transform(value, key)
                : value;
            location_hash_query[key] = value_transform;
        }
        return location_hash_query;
    }
}
export { location_hash_query_ as _location_hash_query, location_hash_query_ as $query__hash__location, };
//# sourceMappingURL=src/location_hash_query_.js.map