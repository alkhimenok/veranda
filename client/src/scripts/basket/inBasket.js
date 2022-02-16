import { uid } from 'uid'
import { addToDatabase } from '../database'
import { seBasketPrice } from './basketPrice'
import { showModal } from '../modal'

const handleAddInBasket = e => {
	const { target, currentTarget } = e

	if (target.tagName !== 'BUTTON') {
		return
	}

	const img = currentTarget.querySelector('[data-child="img"]')
	const text = currentTarget.querySelector('[data-child="text"]')
	const price = currentTarget.querySelector('[data-child="price"]')

	const credentials = {
		id: uid(),
		img: img.src,
		text: text.innerHTML,
		price: parseFloat(price.textContent),
		count: 1
	}

	showModal('Добавлено в корзину')
	addToDatabase('basket', credentials)
	seBasketPrice()

	e.stopPropagation()
	e.preventDefault()
}

export { handleAddInBasket }
