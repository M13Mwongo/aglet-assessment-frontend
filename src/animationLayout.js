import React from 'react'
import { motion } from 'framer-motion'

const animations = {
	initial: { opacity: 0, x: -200, y: 0 },
	animate: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
}

const AnimationLayout = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</motion.div>
	)
}

export default AnimationLayout
