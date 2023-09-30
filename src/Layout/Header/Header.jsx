import React, { useState } from 'react';
import { BiLogoFacebook } from "react-icons/bi"   
import {AiOutlineInstagram}  from "react-icons/ai"  
import { BiLogoTwitter } from "react-icons/bi"  
import {BiLogoPinterestAlt} from "react-icons/bi"  
import {AiOutlineDown} from "react-icons/ai"  
import {MdOutlineAccountCircle} from "react-icons/md" 
import {AiOutlineHeart} from "react-icons/ai" 
import {AiOutlineShoppingCart} from "react-icons/ai" 
import {BiDownArrowAlt} from "react-icons/bi"
import {BiSearchAlt2} from "react-icons/bi"
import luan from './image/logo.png';
import './style.css';
import { Link } from 'react-router-dom';


export default function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [open,setOpen] = useState(false);
  const [dropOpen,setDropOpen] = useState(false);
  const [drMenu,setDrMenu] = useState(false);
  const [ais,setAis] = useState(false);
  const [sez,setSez] = useState(false);
  const [im,setIm] = useState(false);


  

  return (
    <div className="Home">
      <div className="container">
        <div className="upHeader">
          <p className='free'>Free Delivery Over $35 to Most of USA*</p>
          <div className="logo">
            <div className="logos">
              <BiLogoFacebook className="face" />
              <BiLogoTwitter className="face" />
              <AiOutlineInstagram className="face" />
              <BiLogoPinterestAlt className="face" />
            </div>
            <p>Language</p> <AiOutlineDown className='cur' />
            <p>Currency</p> <AiOutlineDown className='cur' />
          </div>
        </div>
        <header>
            <div className="container">
              <div className="header">
                <img className="luan" src={luan} alt="" />
                <div className="headerCatalog">
                  <div>
                  <div class="burger-menu">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-btn" for="menu-toggle">
      <span></span>
    </label>
 
    <ul class="menubox">
            <li><a class="menu-item" href="#">Home</a></li>
            <li><a class="menu-item" href="#">About us</a></li>
            <li><a class="menu-item" href="#">Blog</a></li>
            <li><a class="menu-item" href="#">Articles</a></li>
            <li><a class="menu-item" href="#">Contacts</a></li>
    </ul>
  </div>
                  </div>
                  <div className='h-catalog'>
                  <p  onMouseEnter={() => setMenuOpen(true)}
                   onMouseLeave={() => setMenuOpen(false)}>HOME <BiDownArrowAlt className='down' />
                  {isMenuOpen && (
                  <div className="menuDown">
                    <li><Link className="menu-ite" to='/'>Home Demo 1</Link></li>
                    <li><a className="menu-it" href="#">Home Demo - 2</a></li>
                    <li><a className="menu-it" href="#">Home Demo - 3</a></li>
                  </div>
                )}
                  </p>

                  <p  onMouseEnter={() => setOpen(true)}
                   onMouseLeave={() => setOpen(false)}>SHOP <BiDownArrowAlt className='down' />
                  {open && (
                  <div className="menuDown-shop">
                    <div className='shop'>
                      <h4 className='hh4'>SHOP</h4>
                    <li><a className="menu-it" href="#">Full Width Style 01</a></li>
                    <li><a className="menu-it" href="#">Full Width Style 02</a></li>
                    <li><a className="menu-it" href="#">Full Width Style 03</a></li>
                    <li><a className="menu-it" href="#">Full Width Style 04</a></li>
                    </div>
                    <div className="details">
                      <h4 className='hh4'>PRODUCTS DETAILS</h4>
                    <li><a className="menu-it" href="#">style 01</a></li>
                    <li><a className="menu-it" href="#">style 02</a></li>
                    <li><a className="menu-it" href="#">style 03</a></li>
                    <li><a className="menu-it" href="#">style 04</a></li>
                    </div>
                    
                  </div>
                )}
                  </p> 
                  <p  onMouseEnter={() => setDropOpen(true)}
                   onMouseLeave={() => setDropOpen(false)}>PAGES<BiDownArrowAlt className='down' />
                  {dropOpen && (
                  <div className="menuDown">
                    <li><a className="menu-it" href="#">Home</a></li>
                    <li><a className="menu-it" href="#">About us</a></li>
                    <li><a className="menu-it" href="#">Feedback</a></li>
                    <li><a className="menu-it" href="#">Gallery</a></li>
                    <li><a className="menu-it" href="#">FAQ'S</a></li>
                    <li><a className="menu-it" href="#">Coming Soon</a></li>
                    <li><a className="menu-it" href="#">Privacy Policy</a></li>
                  </div>
                )}
                  </p> 
                  <p  onMouseEnter={() => setDrMenu(true)}
                   onMouseLeave={() => setDrMenu(false)}>MEN<BiDownArrowAlt className='down' />
                  {drMenu && (
                   <div className="menuDown-shop">
                   <div className='shop'>
                     <h4 className='hh4'>SHOP</h4>
                   <li><a className="menu-it" href="#">Full Width Style 01</a></li>
                   <li><a className="menu-it" href="#">Full Width Style 02</a></li>
                   <li><Link className="menu-ite" to='/men'>Full Width Style 03</Link></li>
                   <li><a className="menu-it" href="#">Full Width Style 04</a></li>
                   </div>
                   <div className="details">
                     <h4 className='hh4'>PRODUCTS DETAILS</h4>
                   <li><a className="menu-it" href="#">style 01</a></li>
                   <li><a className="menu-it" href="#">style 02</a></li>
                   <li><a className="menu-it" href="#">style 03</a></li>
                   <li><a className="menu-it" href="#">style 04</a></li>
                   </div>
                   
                 </div>
                )}
                  </p> 
                  <p  onMouseEnter={() => setAis(true)}
                   onMouseLeave={() => setAis(false)}>WOMEN<BiDownArrowAlt className='down' />
                  {ais && (
                   <div className="menuDown-shop">
                   <div className='shop'>
                     <h4 className='hh4'>SHOP</h4>
                   <li><a className="menu-it" href="#">Full Width Style 01</a></li>
                   <li><a className="menu-it" href="#">Full Width Style 02</a></li>
                   <li><a className="menu-it" href="#">Full Width Style 03</a></li>
                   <li><a className="menu-it" href="#">Full Width Style 04</a></li>
                   </div>
                   <div className="details">
                     <h4 className='hh4'>PRODUCTS DETAILS</h4>
                   <li><Link className="menu-ite" to='/women'>style 01</Link></li>  
                   <li><a className="menu-it" href="#">style 02</a></li>
                   <li><a className="menu-it" href="#">style 03</a></li>
                   <li><a className="menu-it" href="#">style 04</a></li>
                   </div>
                   
                 </div>
                )}
                  </p> 
                  <p  onMouseEnter={() => setSez(true)}
                   onMouseLeave={() => setSez(false)}>BLOG<BiDownArrowAlt className='down' />
                  {sez && (
                  <div className="menuDown">
                    <li><a className="menu-it" href="#">Blog grid 01</a></li>
                    <li><a className="menu-it" href="#">Blog grid 02</a></li>
                    <li><a className="menu-it" href="#">Blog grid 03  </a></li>
                  </div>
                )}
                  </p>
                    <p>CONTACT</p>
                  </div>
                  <div className="input-container">
                    
                    <input
                    
                      className="search-input"
                      type="text"
                      placeholder="Search for products"
                    />
                    <span className="search-icon">
                      <BiSearchAlt2 />
                    </span>
                  </div>
                  <div className="logo2">
                    <Link className='menu-it' to='./account'>
                    <MdOutlineAccountCircle />
                    </Link>
                    <Link className="menu-it" to='/favorites'>
                    <AiOutlineHeart  />
                    </Link>
                    <AiOutlineShoppingCart />
                    
                  </div>
                </div>
              </div>
              
          </div>
        </header>
      </div>
    </div>

    
  );

  
}
