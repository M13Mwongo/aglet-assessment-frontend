import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Navbar from './components/Navbar/Navbar'

import './App.scss'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					{/* <Route path='*' element={<PageNotFound />} /> */}
				</Routes>
			</div>
		</Router>
	)
}

export default App
