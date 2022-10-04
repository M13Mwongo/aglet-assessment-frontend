import AnimationLayout from '../animationLayout'
import { contactImage } from '../assets'
import '../styles/Contact.scss'

const Contact = () => {
	/*
	Not too much logic was needed to build this page. Mostly relied on prooper styling
	*/
	return (
		<AnimationLayout>
			<div className='contact'>
				<div className='contact__image'>
					<img src={contactImage} alt='Contact' />
				</div>
				<div className='contact__content'>
					<div className='contact__content--header'>
						<span>hello</span>
					</div>
					<div className='contact__content--details'>
						<div>
							<p>
								my name is <strong>Mwiti Mwongo</strong>
							</p>
							<p>and I am currently watching</p>
							<p>
								a series called <strong>Stranger Things</strong>
							</p>
						</div>
						<div>
							<p>you can reach me on:</p>
							<p>
								<a href='tel:+254740728730'>
									<strong>tel:</strong> +254 740 729 730
								</a>
							</p>
							<p>
								<a href='mailto:mwitimwongo@gmail.com'>
									<strong>email:</strong> mwitimwongo@gmail.com
								</a>
							</p>
						</div>
						<div className='socials'>
							<p>share:</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='icon'
							>
								<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='icon'
							>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 50 50'
								fill='currentColor'
								className='icon'
							>
								<path d='M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z' />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</AnimationLayout>
	)
}

export default Contact
