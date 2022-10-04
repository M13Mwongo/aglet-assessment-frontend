import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import '../styles/Navbar.scss'

const Navbar = () => {
	/*
	width->Keeps track of page width
	clicked->checks whether the navbar icon has been clicked or not
	 */
	const [width, setWidth] = useState(window.innerWidth)
	const [clicked, setClicked] = useState(false)

	//updates page width
	useEffect(() => {
		const update = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', update)
		return () => {
			window.removeEventListener('resize', update)
		}
	}, [width])

	/*
	Depending on the size of the viewport, the desktop navbar or mobile navbar will be shown
	
	 */
	return (
		<div className='Navbar'>
			{width > 960 ? (
				<div className='Navbar__desktop center __vh--row'>
					<div className='Navbar__desktop--image'>
						<a href='/'>
							<img src={logo} alt='Aglet Logo' width={100} />
						</a>
					</div>

					<div className='Navbar__desktop--content '>
						<div>
							<Link to='/'>Home</Link>
							<span></span>
						</div>
						<div>
							<Link to='/contact'>Contact Me</Link>
							<span></span>
						</div>
					</div>
				</div>
			) : (
				<div className='Navbar__mobile center__vh--row'>
					<div className='Navbar__mobile--image'>
						<a href='/'>
							<img src={logo} alt='Aglet Logo' width={100} />
						</a>
					</div>
					<div
						className='Navbar__mobile--icon'
						onClick={() => setClicked(!clicked)}
					>
						{clicked ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon icon-x'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon icon-menu'
							>
								<line x1='3' y1='12' x2='21' y2='12'></line>
								<line x1='3' y1='6' x2='21' y2='6'></line>
								<line x1='3' y1='18' x2='21' y2='18'></line>
							</svg>
						)}
					</div>
					<div
						className={`Navbar__mobile--content ${
							clicked ? `visible` : `invisible`
						}`}
					>
						<Link to='/'>Home</Link>
						<Link to='/contact'>Contact Me</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
