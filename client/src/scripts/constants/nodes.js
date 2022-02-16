const $body = document.body
// header
const $header = $body.querySelector('#header')
const $burgerIcon = $body.querySelector('#burgerIcon')
const $basketLabel = $body.querySelector('#basketLabel')
// blog
const $slider = $body.querySelector('#slider')
const $slideList = $body.querySelector('#slideList')
const $btnPrev = $body.querySelector('#btnPrev')
const $btnNext = $body.querySelector('#btnNext')
// basket
const $cardList = $body.querySelector('#cardList')
const $orderBtn = $body.querySelector('#orderBtn')

export {
	$body,
	$header,
	$burgerIcon,
	$basketLabel,
	$slider,
	$slideList,
	$btnPrev,
	$btnNext,
	$cardList,
	$orderBtn
}
