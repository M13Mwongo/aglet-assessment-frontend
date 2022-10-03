import React from 'react'
import logo from '../../assets/aglet_logo.svg'
import '../Navbar/Navbar.scss'

const Navbar = () => {
	return (
		<div className='Navbar'>
			<div className='Navbar__container'>
				<div className='Navbar__container--image'>
					<img src={logo} alt='Aglet Logo' width={100} />
				</div>

				<div className='Navbar__container--content '>
					<div>
						<a href='/'>Home</a>
						<span></span>
					</div>
					<div>
						<a href='/contact'>Contact Me</a>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
