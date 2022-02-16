import { $body } from './constants/nodes'

const getModalMarkup = title => {
	return `
    <div class="modal" id="modal">
      <h2 class="modal__title">${title}</h2>
      <a class="modal__link" href="/basket">Перейти к оплате</a>
    </div>
  `
}

let $modal = null

const showModal = title => {
	if ($modal) {
		return
	}

	$body.insertAdjacentHTML('beforeend', getModalMarkup(title))

	$modal = $body.querySelector('#modal')

	setTimeout(() => $modal.classList.add('_show'), 0)
	setTimeout(removeModal, 4000)
}

const removeModal = () => {
	$modal.classList.remove('_show')

	setTimeout(() => {
		$modal.remove()
		$modal = null
	}, 400)
}

export { showModal }
