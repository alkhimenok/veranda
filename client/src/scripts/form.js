import { $body } from './constants/nodes'
import { handleSubmitForm } from './order'

const formMarkup = `
  <form class="form" id="form">
    <div class="form__wrapper" id="formWrapper">
      <input class="form__input" name="name" placeholder="Введите полное имя. (ФИО)">
      <input class="form__input" name="address" placeholder="Введите точный адрес.">
      <textarea class="form__input _textarea" name="message" placeholder="Введите пожелания."></textarea>
      <button class="form__btn _btn" id="submitBtn">Заказать</button>
    </div>
  </form>
`

let $form
let $formWrapper
let $submitBtn

const showForm = () => {
	$body.insertAdjacentHTML('beforeend', formMarkup)

	setTimeout(() => {
		$form = document.querySelector('#form')
		$formWrapper = document.querySelector('#formWrapper')
		$submitBtn = document.querySelector('#submitBtn')

		$form.addEventListener('click', removeForm)
		$formWrapper.addEventListener('click', e => e.stopPropagation())
		$submitBtn.addEventListener('click', handleSubmitForm)

		$form.classList.add('_show')
	}, 0)
}

const removeForm = () => {
	$form.classList.remove('_show')

	setTimeout(() => {
		$form.remove()
		$formWrapper.remove()
		$submitBtn.remove()

		$form = null
		$formWrapper = null
		$submitBtn = null
	}, 200)
}

export { showForm, removeForm }
