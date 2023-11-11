import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { id__dom__handler_ } from '../index.js'
test('id__dom__bind.id', ()=>{
	const test__onbind = id__dom__handler_('test__onbind', ()=>{})
	equal(test__onbind.id, 'test__onbind')
	throws(()=>test__onbind.id = 'test__onbind')
	equal(test__onbind.id, 'test__onbind')
})
test('id__dom__bind.toString()', ()=>{
	const test__onbind = id__dom__handler_('test__onbind', ()=>{})
	equal(test__onbind.toString(), 'test__onbind')
})
test.run()
