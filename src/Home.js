import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card'
import { sliderData } from './assets'

import './Home.scss'

const Home = () => {
	const [mousePosition, setMousePosition] = useState(null)
	const [midpt, setMidpt] = useState(window.innerWidth / 2)
	const [offsetX, setOffsetX] = useState(0)

	const scrollX = () => {
		let wrapper = document.getElementById('home')

		let lowerBoundary = window.innerWidth / 4
		let upperBoundary = 3 * lowerBoundary

		if (mousePosition > upperBoundary || mousePosition < lowerBoundary) {
			wrapper.scrollBy(offsetX, 0)
		}
	}

	useEffect(() => {
		const update = (e) => {
			setMousePosition(e.clientX)
			let offset = mousePosition - midpt
			setOffsetX(offset)
		}
		const resize = () => {
			setMidpt(window.innerWidth / 2)
		}
		window.addEventListener('mousemove', update)
		window.addEventListener('mousedown', update)
		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('mousemove', update)
			window.removeEventListener('mousedown', update)
			window.removeEventListener('resize', resize)
		}
	}, [mousePosition, offsetX, midpt])

	return (
		<div className='home' id='home'>
			<div className='home__wrapper' onMouseOver={scrollX}>
				{sliderData.map((card, index) => (
					<div className='home__video' key={index}>
						<Card image={card.image} video={card.video} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
