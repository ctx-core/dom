import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { id__bind_dom_ } from '../index'
test('id__bind_dom.id', ()=>{
	const test__bind_dom = id__bind_dom_('test__bind_dom', ()=>{})
	equal(test__bind_dom.id, 'test__bind_dom')
	throws(()=>test__bind_dom.id = 'bar')
	equal(test__bind_dom.id, 'test__bind_dom')
})
test('id__bind_dom.toString()', ()=>{
	const test__bind_dom = id__bind_dom_('test__bind_dom', ()=>{})
	equal(test__bind_dom.toString(), 'test__bind_dom')
})
test.run()
