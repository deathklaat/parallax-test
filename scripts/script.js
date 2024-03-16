window.onload = () => {
	const stars = document.querySelector('#stars')
	const moon = document.querySelector('#moon')
	const mountainsBack = document.querySelector('#mountains-back')
	const title = document.querySelector('#title')
	const exploreButton = document.querySelector('#explore-button')
	const header = document.querySelector('.header')
	
	window.addEventListener('scroll', () => {
		let value = window.scrollY
		
		stars.style.transform = `translateX(${value * .25}px)`
		moon.style.transform = `translateY(${value * 1.05}px)`
		mountainsBack.style.transform = `translateY(${value * .5}px)`
		title.style.transform = `translateX(${-value * 4}px) translateY(${value * .75}px)`
		exploreButton.style.marginTop = `${value * 1.5}px`
		header.style.transform = `translateY(${value * .5}px)`
	})
}
