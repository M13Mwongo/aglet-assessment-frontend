import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card'
import { sliderData } from '../assets'
//SCSS file for the homepage
import './Home.scss'
import AnimationLayout from '../animationLayout'

const Home = () => {
	/*
	An object was preferred initially but resulted in issues with the mouse updating its state, thus individual state declaration statements were used. 
	The states and their intended purposes are as follows:
		mousePosition -> keeps track of the mouse position on the screen
		width -> defines the wdith of the screen. This is needed as the midpoint of the screen is used as a reference point for the scroll-on-hover feature.
		offsetX -> determines the horizontal distance between mousePosition and screen's midpoint (width/2). This is used to determine the horizontal scroll distance
	*/
	const [mousePosition, setMousePosition] = useState(null)
	const [width, setWidth] = useState(window.innerWidth)
	const [offsetX, setOffsetX] = useState(0)

	/*
	scrollX function -> used to create a scrolling effect on hover by calling the element.scrollBy function and passing the offset to it
	*/
	const scrollX = () => {
		let wrapper = document.getElementById('home')

		let lowerBoundary = width / 3
		let upperBoundary = 2 * lowerBoundary

		if (mousePosition > upperBoundary || mousePosition < lowerBoundary) {
			wrapper.scrollBy(offsetX, 0)
		}
	}

	/*
	Needed to ensure that the mouse position (and all other variables dependent on it) & window size is updated every tiem the mouse moves. Runs any time the mousePosition, offset, or midpoint change
	*/
	useEffect(() => {
		//updates the position of the mouse as well as the offset
		const updateMouse = (e) => {
			setMousePosition(e.clientX)

			let offset = mousePosition - width / 2
			setOffsetX(offset)
		}
		//updates the size of the window
		const resize = () => {
			setWidth(window.innerWidth)
		}
		/*
		event listeners call the functions above every time the mouse is pressed, moved, or over an intended target, or when the window is resized
		*/
		window.addEventListener('mousemove', updateMouse)
		window.addEventListener('mousedown', updateMouse)
		window.addEventListener('mouseover', updateMouse)
		window.addEventListener('resize', resize)

		//need to remove the event listeners to prevent infinite loops
		return () => {
			window.removeEventListener('mousemove', updateMouse)
			window.removeEventListener('mousedown', updateMouse)
			window.removeEventListener('resize', resize)
		}
	}, [mousePosition, offsetX, width])

	return (
		<AnimationLayout>
			<div className='home' id='home'>
				<div className='home__wrapper' onMouseOver={scrollX}>
					{/* quickly produce multiple Card components that are each populated with different data from the sliderData object array */}
					{sliderData.map((card, index) => (
						<div className='home__video' key={index}>
							<Card image={card.image} video={card.video} width={width} />
						</div>
					))}
				</div>
			</div>
		</AnimationLayout>
	)
}

export default Home
