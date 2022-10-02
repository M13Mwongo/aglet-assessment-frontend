import React, { useState } from 'react'
import Card from './components/Card/Card'
import { sliderData } from './assets'

import './Home.scss'

const Home = () => {
	const [hover, setHover] = useState(false)
	const [lighter, setLighter] = useState(false)

	const findPosition = (position) => {}

	return (
		<div className='home'>
			{sliderData.map((card, index) => (
				<div
					className={`home__video ${hover ? `home__video--dark` : null}`}
					onMouseOver={() => {
						setHover(true)
						setLighter(true)
					}}
					onMouseLeave={() => setHover(false)}
				>
					<Card image={card.image} video={card.video} lighten={lighter} />
				</div>
			))}
		</div>
	)
}

export default Home
