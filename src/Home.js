import React, { useState } from 'react'
import Card from './components/Card/Card'
import { sliderData } from './assets'

import './Home.scss'

const Home = () => {
	return (
		<div className='home'>
			<Card image={sliderData[0].image} video={sliderData[0].video} />
			{/* 			
			{sliderData.map((card, index) => (
				<Card image={card.image} video={card.video} />
			))} 
			*/}
		</div>
	)
}

export default Home
