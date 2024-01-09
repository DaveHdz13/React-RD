import React from 'react'
import './card.css'
import ship01 from '../../assets/img/stability.png'

function Card() {
  return (
    <div className='card-container'>
      <img src={ship01} alt="image" />
      <div className='text-container'>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint dolorem, minima sit asperiores unde odio illum dignissimos voluptas, ipsum amet pariatur doloribus placeat accusantium ex ullam doloremque dolor labore?</p>
      </div>
      <div className='links-container'>
        <a href="#">Share</a>
        <a href="#">Learn More</a>
      </div>
    </div>
  )
}

export default Card