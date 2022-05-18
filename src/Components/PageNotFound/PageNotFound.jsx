import React from 'react'
import './PageNotFound.css'

function PageNotFound() {
  return (
    <>
        <main className='page-not-found'>
            <h1>Oopsies!</h1>
            <h3>This page doesn't exist!</h3>
            <p>If it helps, try checking for typos in your URL!</p>
        </main>
    </>
  )
}

export default PageNotFound