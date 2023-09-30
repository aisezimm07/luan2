import React from 'react'
import { BiLogoFacebook } from "react-icons/bi"   
import {AiOutlineInstagram}  from "react-icons/ai"  
import { BiLogoTwitter } from "react-icons/bi"  
import {BiLogoPinterestAlt} from "react-icons/bi" 
import "./footer.scss"

export default function Footer() {
  return (
    <div className='footer'>
    <div className="df">
      <div className="help">
        <h1 className='lu'>Luan</h1>
        <p className='pel'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nihil harum corrupti quos dolore iusto. Sit!</p>
        <div className="logos">
              <BiLogoFacebook className="face" />
              <BiLogoTwitter className="face" />
              <AiOutlineInstagram className="face" />
              <BiLogoPinterestAlt className="face" />
            </div>
            <p className='pele'>Check our shop in Google Map</p>
      </div>
      <div className='help'>
        <h3>Help</h3>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
      </div>
      <div className='help'>
        <h3>Help</h3>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
      </div><div className='help'>
        <h3>Help</h3>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
        <p className='lineup'>Track ur order</p>
      </div>
    </div>
    </div>
  )
}
