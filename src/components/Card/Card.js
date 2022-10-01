import React, { useState } from 'react'
import './Card.scss'

const Card = ({ image, video }) => {
	const play = (e) => {
		e.target.play()
	}
	const stop = (e) => {
		e.target.pause()
		e.target.currentTime = 0
	}
	const checkWidth = () => {
		let width = window.innerWidth

		if (width < 969) {
			console.log('100%')
			//return '100%'
		} else {
			console.log('640px')
			//return '640px'
		}
	}

	return (
		<div className='card' onLoad={checkWidth}>
			{/* <div className='card__image'>
				<img src={image} alt='Thumbnail' />
			</div> */}
			<div className='card__video'>
				<video poster={image} onMouseOver={play} onMouseLeave={stop}>
					<source src={video} type='video/mp4' />
				</video>
			</div>
		</div>
	)
}

export default Card

//border:1px solid white;
