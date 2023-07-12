import './PricingCardStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
            <h3>-  Basic  -</h3>
            <span className='bar'></span>
            <p className='btc'>$ ---</p>
            <p> --- Days </p>
            <p> --- Pagess </p>
            <p>- Featured </p>
            <p>- Responsive Design </p>
            <Link to='/contact' className='btn'>
                PURCHASE NOW
            </Link>
        </div>

        <div className='card'>
            <h3>- premiem  -</h3>
            <span className='bar'></span>
            <p className='btc'>$ ---</p>
            <p> --- Days </p>
            <p>--- Pages </p>
            <p>- Featured </p>
            <p>- Responsive Design </p>
            <Link to='/contact' className='btn'>
                PURCHASE NOW
            </Link>
        </div>

        <div className='card'>
            <h3>-  Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$ ---</p>
            <p> --- Days </p>
            <p> --- Pages </p>
            <p>- Featured </p>
            <p>- Responsive Design </p>
            <Link to='/contact' className='btn'>
                PURCHASE NOW
            </Link>
        </div>

      </div>
    </div>
  )
}

export default PricingCards
