import React from 'react'
import Card from './components/Card/Card'
import { sliderData } from './assets'

import './Home.scss'

const Home = () => {
	return (
		<div className='home'>
			{sliderData.map((card, index) => (
				<div className='home__video'>
					<Card image={card.image} video={card.video} />
				</div>
			))}
		</div>
	)
}

export default Home
