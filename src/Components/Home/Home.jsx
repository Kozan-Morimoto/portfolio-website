import React from 'react'
import './Home.css'
import About from './About/About.jsx'
import Work from './Work/Work.jsx'
import Top from './Top/Top.jsx'
import Contact from './Contact/Contact'

function Home() {
	return (
		<main className='home'>
			<section>
				<Top />
			</section>

			<section>
				<About />
			</section>

			<section>
				<Work />
			</section>

			<section>
				<Contact />
			</section>
			
			<footer>
				<p>Kozan Morimoto</p>
				<p>"Twenty-twenty-two"</p>
			</footer>
		</main>
	)
}

export default Home
