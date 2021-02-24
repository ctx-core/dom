
export function check__element(el) {
	const { checked } = el
	if (!checked) {
		el.checked = true
	}
	const click__event = document.createEvent('HTMLEvents')
	click__event.initEvent('click', true, false)
	el.dispatchEvent(click__event)
	if (!checked) {
		const change__event = document.createEvent('HTMLEvents')
		change__event.initEvent('change', true, false)
		el.dispatchEvent(change__event)
	}
	return el
}
