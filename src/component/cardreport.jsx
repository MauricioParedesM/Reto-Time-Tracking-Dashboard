import React from 'react'
import {cardreportTop} from "./cardreportTop"
import "../styles/cardreport.css"

function CardReport() {
  return (
    <div className='cardreport'>
      <cardreportTop/>
    
    <div className='bottom'>
      <span>Daily</span>
      <span>Weekly</span>
      <span>Monthly</span>
    </div>
    </div>
  )
}

export {cardreport}