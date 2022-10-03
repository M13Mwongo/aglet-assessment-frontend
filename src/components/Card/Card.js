import React, { useState, useEffect } from 'react'
import './Card.scss'

const Card = ({ image, video }) => {
	const [width, setWidth] = useState()

	const play = (e) => {
		e.target.play()
	}
	const stop = (e) => {
		e.target.pause()
		e.target.currentTime = 0
	}

	useEffect(() => {
		const update = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', update)
		return () => {
			window.removeEventListener('resize', update)
		}
	}, [width])

	return (
		<div className='card'>
			<video
				poster={image}
				onMouseOver={play}
				onMouseLeave={stop}
				width={width < 960 ? '100%' : '640px'}
				height={width < 960 ? '100%' : '360px'}
				disabled
			>
				<source src={video} type='video/mp4' />
			</video>
		</div>
	)
}

export default Card

//border:1px solid white;
