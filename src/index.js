import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// Navbar Toggle
const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
	nav.classList.toggle('active')
	toggle.classList.toggle('active')
})

// Intersection observers
const nameHeading = document.querySelector('.fade-up')

const appearOptions = {}
const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		entry.target.classList.add('appear')
		appearOnScroll.unobserve(entry.target)
	})
},
appearOptions)

appearOnScroll.observe(nameHeading)

// Parallax Scrolling
const kozanImage = document.querySelector('.kozan-image')

window.addEventListener('scroll', () => {
	let offset = window.pageYOffset
	kozanImage.style.backgroundPositionY = offset * 0.6 + 'px'
})