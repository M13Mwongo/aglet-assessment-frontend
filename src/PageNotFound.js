import React from 'react'
import { Link } from 'react-router-dom'
import AnimationLayout from './animationLayout'
import './PageNotFound.scss'

const PageNotFound = () => {
	return (
		<AnimationLayout>
			<div className='error'>
				<div className='error__wrapper'>
					<div className='error__wrapper--left'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							class='icon-tv'
						>
							<rect x='2' y='7' width='20' height='15' rx='2' ry='2'></rect>
							<polyline points='17 2 12 7 7 2'></polyline>
						</svg>
					</div>
					<div className='error__wrapper--right'>
						<h1>OOPS</h1>
						<p>It looks like the page you navigated to doesn&apos; exist</p>
						<p>
							Here's a TV that you can watch while we work on getting that page
							up and running ...
						</p>
						<br />
						<p>
							though you&apos;re better off <Link to='/'>clicking here</Link> to
							go back to the homepage
						</p>
					</div>
				</div>
			</div>
		</AnimationLayout>
	)
}

export default PageNotFound
