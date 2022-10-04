import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './PageNotFound'
import Navbar from './components/Navbar'

import './styles/App.scss'

/*
Defines the animation to use for the transition between pages. This will show a simple slide in
*/

/*
	To navigate between pages/ interfaces, the entire app needs to be wrapped by the Router. Each of the routes is defined and resnders an intended target.
	A 404 error page has been added as well in the event that a user types in an incorrect URL
*/
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
