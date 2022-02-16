import { $burgerIcon, $slider, $orderBtn } from './scripts/constants/nodes'
import { cardList } from './scripts/constants/nodeList'

import { seBasketPrice } from './scripts/basket/basketPrice'
import { fillBasket } from './scripts/basket/fillBasket'

import { handleToggleShowMenu } from './scripts/menu'
import { handelSwipe } from './scripts/slider/swiper'
import { handleAddInBasket } from './scripts/basket/inBasket'
import { handleFillCredentials } from './scripts/order'

const start = () => {
	if (location.pathname === '/catalog') {
		cardList.forEach(item => item.addEventListener('click', handleAddInBasket))
	} else if (location.pathname === '/basket') {
		fillBasket()

		$orderBtn.addEventListener('click', handleFillCredentials)
	} else {
		$slider.addEventListener('click', handelSwipe)

		cardList.forEach(item => item.addEventListener('click', handleAddInBasket))
	}

	seBasketPrice()

	$burgerIcon.addEventListener('click', handleToggleShowMenu)
}

window.addEventListener('load', start)
