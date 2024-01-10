import React from 'react'
import './card.css'

function Card(props) {
  console.log(props);
  return (
    <div className='card-container'>
      <img src={props.image} alt="image" />
      <div className='text-container'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className='links-container'>
        <a href="#">Share</a>
        <a href="#">Learn More</a>
      </div>
    </div>
  )
}

export default Card