import React from 'react'
import './Top.css'
import circleKozan from '../../../images/picture-and-shadow.png'

function Top() {
	return (
        <>
		<div className='top'>
			<div className='top-text'>
				<h1 id='hello'>Hello!</h1>
				<h1 id='im'>I'm</h1>
				<h1 id='kozan'>Kozan,</h1>
				<h3 id='software'>a software engineer.</h3>
			</div>
			<div>
				<img src={circleKozan} alt='Kozan' className='kozan-image' />
			</div>
		</div>
        </>
	)
}

export default Top
