import React from 'react'
import cara from "../images/image-jeremy.png"
import "../styles/cardreportTop.css"
function cardreportTop() {
  return (
   <div className='reporttop'>
      
        <img src={cara} alt="" />
   
    <div className='letras'>
        <p>Report for</p>
        <p>Jeremy Robson</p>
    </div>
   </div>
    
  )
}

export {cardreportTop}