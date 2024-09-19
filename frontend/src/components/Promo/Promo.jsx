import React, { useRef } from 'react'
import './Promo.css'
import { assets } from '../../assets/assets'


const Promo = () => {
 

  return (
    <div className='promo'>
      <div className='promo-title'>
        <h2>Indulge in our most popular dishes</h2>
            <p>Experience the flavors that everyone's talking about. </p>
            
        </div>
      <div className='promo-content'>
        
        <div className="promo-content-left">
            <img src={assets.plate} alt="plate" />
            <h3>Fresh Fish Platter Roll</h3>
            <p>Our food is made from the freshest ingredients</p>
        </div>
        <div className='promo-content-right'>
          <div className='promo-item active'>
          <img src={assets.plate} alt="plate" />
          <div className='promo-item-info'>
            <h4>Veggie Roll</h4>
            <p>Our food is made from the freshest ingredients and the result is a much better.</p>
          </div>
          <button className="order-now">Order</button>
          </div>
          <div className='promo-item'>
          <img src={assets.plate} alt="plate" />
          <div className='promo-item-info'>
            <h4>Veggie </h4>
            <p>Our food is made from the freshest ingredients and the result is a much better.</p>
          </div>
          <button className="order-now">Order</button>
          </div>
          <div className='promo-item'>
          <img src={assets.plate} alt="plate" />
          <div className='promo-item-info'>
            <h4> Roll</h4>
            <p>Our food is made from the freshest ingredients and the result is a much better.</p>
          </div>
          <button className="order-now">Order</button>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Promo