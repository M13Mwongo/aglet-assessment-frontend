import React from 'react'
import './Card.scss'

const Card = ({ image, video, lighten }) => {
	const play = (e) => {
		e.target.play()
	}
	const stop = (e) => {
		e.target.pause()
		e.target.currentTime = 0
	}

	return (
		<div className={`card ${lighten ? `card__lighten` : null}`}>
			<div className='card__video'>
				<video
					poster={image}
					onMouseOver={play}
					onMouseLeave={stop}
					width={window.innerWidth < 640 ? '100%' : '640px'}
					height='auto'
				>
					<source src={video} type='video/mp4' />
				</video>
			</div>
		</div>
	)
}

export default Card

//border:1px solid white;
