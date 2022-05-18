import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar() {
	return (
		<>
			<nav id='nav'>
				<button className='toggle' id='toggle'>
					<FontAwesomeIcon icon={faBars} className='faBars' id='faBars' />
					<FontAwesomeIcon icon={faTimes} className='faTimes' id='faTimes' />
				</button>

				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
