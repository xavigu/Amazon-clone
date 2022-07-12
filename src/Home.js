import React from 'react'
import './Home.css'
import Product from './Product';
import cardImage from './assets/single-card-image.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
          alt='' 
        />

        <div className='home__row'>
          <Product id='1' title='The lean startup' price={99.21} image={cardImage} rating={5}/>
          <Product id='2' title='The lean startup' price={34} image={cardImage} rating={2}/>
        </div>

        <div className='home__row'>
          <Product id='4' title='The lean startup' price={121} image={cardImage} rating={1}/>
          <Product id='6' title='The lean startup' price={19.41} image={cardImage} rating={2}/>
          <Product id='7' title='The lean startup' price={39.27} image={cardImage} rating={3}/>
        </div>

        <div className='home__row'>
          <Product id='9' title='The lean startup' price={299} image={cardImage} rating={5}/>
        </div>

      </div>
    </div>
  )
}

export default Home