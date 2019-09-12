import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';
import './thank-you-page.css'

export default () => {
  const { width, height } = useWindowSize()
  return (
    <div className="thank-you-page">
      <Confetti
        width={width}
        height={height}
      />
      <div className="title">
        <h1>thank<br/>you</h1>
      </div>
      <Link to="/">Go home</Link>
    </div>
    
    
  )
}
