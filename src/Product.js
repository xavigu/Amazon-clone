import React from 'react'
import './Product.css'
import cardImage from './assets/single-card-image.jpg'

function Product({ title = 'Main title', image = cardImage, price = 50, rating = 3}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img src={image}
           alt='' 
      />

      <button> Add to basket </button>
    </div>
  )
}

export default Product