import { $slideList, $btnPrev, $btnNext } from '../constants/nodes'

let currentSlide = 0

const handelSwipe = e => {
	const sliderWidth = $slideList.scrollWidth
	const totalSlides = $slideList.children.length
	const slideWidth = sliderWidth / totalSlides

	if (e.target === $btnPrev && currentSlide > 0) {
		currentSlide -= 1
	} else if (e.target === $btnNext && currentSlide < totalSlides - 1) {
		currentSlide += 1
	} else {
		return currentSlide
	}

	console.log(currentSlide)

	$slideList.style.transform = `translateX(-${slideWidth * currentSlide}px)`
}

export { handelSwipe }
