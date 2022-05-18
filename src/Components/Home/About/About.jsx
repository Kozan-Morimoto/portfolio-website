import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import circleKozan from '../../../images/picture-and-shadow.png'
function About() {
	return (
		<>
			<div className='about'>
				<div>
					<img src={circleKozan} alt='Kozan' className='kozan-image' />
				</div>
				<h1 className='about-heading'>About Me</h1>
				<div className='section-text-box about-text'>
					<p>
						Hello! My name is Kozan Morimoto, I enjoy digging deep into the
						intricacies of projects! My interest in tech started around when I
						was in elementary school, playing with code in Scratch and hacking
						around with Minecraft commands.
					</p>
					<div className='about-decoration'>
						<FontAwesomeIcon icon={faCode} />
					</div>
				</div>
			</div>
		</>
	)
}

export default About
