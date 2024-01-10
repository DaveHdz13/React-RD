import React from 'react'
import './card.css'
import Check from '../check_available/Check'

function Card(props) {
  return (
    <div className={props.disable ? 'card-container disable' : 'card-container'}>
      <img src={props.image} alt="image" />
      <div className='text-container'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className='links-container'>
        <Check disable={props.disable} />
        <a href="#">Learn More</a>
      </div>
    </div>
  )
}

export default Card