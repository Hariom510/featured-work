import React from 'react'
import './FeaturedProduct.css'

function FeaturedProduct() {
  return (
    <div className='container'>
    <div className='left'>
      <div className='btns'>
      <button style={{background:"none", color:"white"}}>Featured Item</button>
      <div className='btns btn-items'>
      <button>Best Seller</button>
      <button>Summer Discount</button>
      <button>Premium Product</button>
      <button>Gift Idea</button>
     </div>
      </div>
    </div> 
    <div className='mid'>
      <h2>Apple iPhone 6</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      <button>Read More</button>
    </div>
    <div className="right">
      <img width="auto" height="240" src="nokia-phone.png" alt="phone" />
    </div>
    </div>
  )
}

export default FeaturedProduct