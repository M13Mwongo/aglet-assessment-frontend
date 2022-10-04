import React from 'react'
import '../styles/Card.scss'

/*
The Card components takes 3 props: image,video and width.
	image->used to dictate the poster image of the video
	video->determines the video to be played
	width->passes on the wdith of the DOM calculated in the Home page
*/
const Card = ({ image, video, width }) => {
	//used to play the video
	const play = (e) => {
		e.target.play()
	}
	//used to not only pause the video but also take it back to the beginning
	const stop = (e) => {
		e.target.pause()
		e.target.currentTime = 0
	}
	/*
Conditional rendering has been used to resize the video. Utilises the width of the DOM passed on to ensure it is either a fullwidth video (width<960px) or restricted to 360px (width>960px)
 */
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
