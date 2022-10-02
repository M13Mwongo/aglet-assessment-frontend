import React, { useState } from 'react'
import './Card.scss'

const Card = ({ image, video }) => {
	const [hovered, setHovered] = useState(false)

	const hover = () => {
		setHovered(true)
	}
	const notHover = () => {
		setHovered(false)
	}
	const play = (e) => {
		e.target.play()
	}
	const stop = (e) => {
		e.target.pause()
		e.target.currentTime = 0
	}

	return (
		<div
			onMouseOver={hover}
			onMouseLeave={notHover}
			className={`${hovered ? `card__hovered` : `card__notHovered`}`}
		>
			<div className={`${hovered ? `card__video--hovered` : `card__video`}`}>
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
