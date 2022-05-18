import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<NavBar />

			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
