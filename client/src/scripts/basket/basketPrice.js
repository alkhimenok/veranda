import { $basketLabel } from '../constants/nodes'
import { getItemFromDatabase } from '../database'

const seBasketPrice = () => {
	const data = getItemFromDatabase('basket')
	const price = data.reduce((acc, item) => (acc += item.price * item.count), 0)

	$basketLabel.textContent = `${price}.00`
}

export { seBasketPrice }
