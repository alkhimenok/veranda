import { $cardList } from '../constants/nodes'
import { getItemFromDatabase } from '../database'

const getCardMarkup = (img, text, price, count) => {
	return `
  <li class="basket__card card _line"><img class="card__img _img" src="${img}" alt="card"/>
    <p class="card__text _text">${text}</p>
    <div class="card__count">
      <input class="card__input _input-value" value="${count}"/>
    </div>
    <h3 class="card__price _subtitle">${price} p.</h3>
  </li>
  `
}
const fillBasket = () => {
	const basketList = getItemFromDatabase('basket')

	$cardList.innerHTML = ''

	basketList.forEach(({ img, text, price, count }) => {
		$cardList.insertAdjacentHTML(
			'beforeend',
			getCardMarkup(img, text, price, count)
		)
	})
}

export { fillBasket }
