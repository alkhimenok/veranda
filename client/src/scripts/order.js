import { showForm, removeForm } from './form'
import { clearDatabase } from './database'
import { showModal } from './modal'
import { fillBasket } from './basket/fillBasket'

const handleFillCredentials = () => {
	showForm()
}

const handleSubmitForm = e => {
	e.preventDefault()

	showModal('Ваш заказ в обработке')
	removeForm()
	clearDatabase()
	fillBasket()
}

export { handleFillCredentials, handleSubmitForm }
