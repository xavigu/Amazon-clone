import React from 'react'
import './Product.css'
import cardImage from './assets/single-card-image.jpg'
import { useStateValue } from './StateProvider'

function Product({id, title = 'Main title', image = cardImage, price = 50, rating = 3}) {
  // array with the state of the store and dispatch to manipulate the data
  const [{ basket }, dispatch] = useStateValue();

  console.log('basket value: ', basket)

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

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

      <button onClick={addToBasket}> Add to basket </button>
    </div>
  )
}

export default Product