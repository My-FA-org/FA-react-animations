import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import './thank-you-page.css'

export default () => {
  const { width, height } = useWindowSize()
  return (
    <div className="thank-you-page">
      <Confetti
        width={width}
        height={height}
      />
      <div class="title">
        <h1>thank<br/>you</h1>
      </div>
    </div>
    
    
  )
}
