import { $slideList, $btnPrev, $btnNext } from '../constants/nodes'

const handelSwipe = e => {
	const sliderWidth = $slideList.scrollWidth
	const totalSlides = $slideList.children.length
	const slideWidth = sliderWidth / totalSlides
	let currentSlide = 0

	if (e.target === $btnPrev && currentSlide > 0) {
		currentSlide--
	} else if (e.target === $btnNext && currentSlide < totalSlides - 2) {
		currentSlide++
	} else {
		return
	}

	$slideList.style.transform = `translateX(-${slideWidth * currentSlide}px)`
}

export { handelSwipe }
