import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' /* Import fontawesome component */
import { faGithub } from '@fortawesome/free-brands-svg-icons' /* Import icon from library */
import './Work.css'

function Work() {
	return (
		<div className='work'>
			<div className='work-heading'>
				<h1>Work</h1>
			</div>

			<div className='section-text-box project'>
				<h3>Project A</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>

				<div>
					<ul className='project-languages'>
						<li>- JavaScript</li>
						<li>- Node.js</li>
						<li>- PostgreSQL</li>
					</ul>
				</div>

				<FontAwesomeIcon icon={faGithub} className='icon-github' />
			</div>
		</div>
	)
}

export default Work
