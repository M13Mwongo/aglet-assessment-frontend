import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import './Navbar.scss'

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const [clicked, setClicked] = useState(false)

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
							<Link to='/contact'>Home</Link>
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
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='icon icon-x'
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
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='icon icon-menu'
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
						<Link to='/contact'>Home</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar
