import React from 'react'
import "./style.css"
import img1 from "./images/woman1.png"
import img2 from "./images/woman2.png"
import img3 from "./images/woman3.png"

import img5 from "./images/collection1.jpg"
import img6 from "./images/collection2.jpg"
import img7 from "./images/collection3.jpg"
import {FaStore} from "react-icons/fa"


export default function NewArrival() {



  
  return (
    <div className='containerr'>
<div className="all2">
      <div className="main">
      <div className="text">
    <h4 className='new'>New Arrival!</h4>
    <div className="main-title">
        <h1 className='woma'>WOMAN</h1>
        <div className='five'>
        <h1 className='woma'>COLLECTION</h1>
        <h2 className='fif'><i>-50%</i></h2>
        </div>
    </div>
    
    <button><FaStore className='store'/>SHOP NOW</button>
</div>
        <div className="images">
    <div className="image-container">
        <img src={img1} alt="" />
    </div>
    <div className="image-container">
        <img src={img2} alt="" />
    </div>
    <div className="image-container">
        <img src={img3} alt="" />
    </div>
    </div>
      </div>
      </div>
    <div className="product_card">
     <div className="card">
        <img className='card_img'  src={img5} alt="" />
        <div className='vkladka'>Clothing <p>18 items</p></div>
     </div>
     <div className="card">
     <img className='card_img' src={img6} alt="" />
     <div className='vkladka'>Accessories <p>18 items</p></div>
     </div>
     <div className="card">
     <img className='card_img' src={img7} alt="" />
     <div className='vkladka'>Leather bag <p>52 items</p></div>
     </div>
    </div>

    </div>
  )
}
