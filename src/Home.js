import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card'
import { sliderData } from './assets'

import './Home.scss'

const Home = () => {
	const [mousePosition, setMousePosition] = useState(null)

	// const findMousePosition = () => {
	// 	setMousePosition(window.event.clientX)
	// }

	const scrollX = () => {
		let wrapper = document.getElementById('home')
		let middle = window.innerHeight / 2

		var scrollDifference = mousePosition - middle
		wrapper.scrollBy(scrollDifference, 0)
	}

	useEffect(() => {
		const update = (e) => {
			setMousePosition(e.x)
		}
		window.addEventListener('mousemove', update)
		return () => {
			window.removeEventListener('mousemove', update)
		}
	}, [mousePosition])

	// useEffect(() => {
	// 	setMousePosition(e)
	// }, [mousePosition])

	return (
		<div className='home' id='home'>
			<div className='home__wrapper' draggable onDrag={scrollX}>
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
