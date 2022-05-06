import React from 'react'
import {cardbottom} from "./cardbottom"
import maleta from "../images/icon-work.svg"
import "../styles/card.css"
function Card1(props) {
 const hobby=props.hobby
 const hour=props.hour
 const last=props.last
 const theme='card ' + props.theme
 const imagenes=props.imagenes 
  return (
    <div className={theme}>
        <div className='Work-img'>
            <img src={imagenes} alt="" />
        </div>
        <cardbottom hobby = {hobby} hour={hour} last={last}/>
    </div>
  )
}

export {card}