import React from 'react'

import { useRef, useState } from 'react';
import { useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import {MdOutlinePayment} from "react-icons/md"
import img from "./images2/blog1.jpg"
import img1 from "./images2/blog2.jpg"
import img2 from "./images2/blog3.jpg"
import img3 from "./images2/partner1.png"
import img4 from "./images2/partner2.png"
import img5 from "./images2/partner3.png"
import img6 from "./images2/partner4.png"
import img7 from "./images2/products1.jpg"
import img8 from "./images2/products2.jpg"
import img9 from "./images2/products3.jpg"
import img10 from "./images2/collection4.jpg"
import img11 from "./images2/collection5.jpg"
import img12 from "./images2/feedback-bg.jpg"
import {FaStore} from "react-icons/fa"
import "./style.css"
import {LiaTelegramPlane} from "react-icons/lia"







export default function BestSellings() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://6499741f79fbe9bcf83f4854.mockapi.io/clothes')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

 

  return (
    <div className='container'>
      <h1><span>Best Selling Products</span></h1>
      <p className='pelem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
       et dolore magna aliqua. Ut enim ad minim veniam.</p>
       <div className="slider">
       <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <img className='swiperImg' src={product.img} alt={product.name} />
              <div className='opacity'>
                <h5>{product.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${product.price}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
       <div className="two-blocks">
        <div className="girls">
          <div className="div">
            <h3 className='summer'>SUMMER</h3>
            <h1 className='salef'>SALE</h1>
            <h2 className='upto'>UP TO 50%</h2>
            <button className='btnn'><FaStore className='shop'/>SHOP NOW</button>
          </div>
        <img className='girlz' src={img10} alt="" />
        </div>
        <div className="jeans">
        <div className="div">
            <h3 className='summer'>SUMMER</h3>
            <h1 className='salef'>SALE</h1>
            <h2 className='upto'>UP TO 50%</h2>
            <button className='btnn'><FaStore className='shop'/>SHOP NOW</button>
          </div>
        <img className='girlz' src={img11} alt="" />
        </div>
       </div>
       <div className="h1span">
       <h1><span>New Arrival Products</span></h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
       et dolore magna aliqua. Ut enim ad minim veniam.</p>
       </div>
       <div className="slider">
       <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <img className='swiperImg' src={product.img} alt={product.name} />
              <div className='opacity'>
                <h5>{product.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${product.price}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
       <div className="plushki">
        <div className="inbox">
          <span className='md2'><MdOutlinePayment className='md'/></span>
          <div className="texts">
          <h1 className='free'>Free Shipping</h1>
          <p className='or'>Orders over $200</p>
          </div>
        </div>
        <div className="inbox">
          <span className='md2'><MdOutlinePayment className='md'/></span>
          <div className="texts">
          <h1 className='free'>Free Shipping</h1>
          <p className='or'>Orders over $200</p>
          </div>
        </div><div className="inbox">
          <span className='md2'><MdOutlinePayment className='md'/></span>
          <div className="texts">
          <h1 className='free'>Free Shipping</h1>
          <p className='or'>Orders over $200</p>
          </div>
        </div><div className="inbox">
          <span className='md2'><MdOutlinePayment className='md'/></span>
          <div className="texts">
          <h1 className='free'>Free Shipping</h1>
          <p className='or'>Orders over $200</p>
          </div>
        </div>
       </div>
     

       <div className="wsotka">
       <h1 className='border'><span>Trusted Customer Feedback</span></h1>
       <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente molestias <br /> tenetur incidunt, laboriosam sunt magni maiores harum veniam nisi alias enim quia itaque nihil <br /> animi, officiis, rerum autem quae fugit? adipisicing elit. Sapiente molestias  adipisicing elit. Sapiente molestias <br />  adipisicing elit. Sapiente molestias <br />  adipisicing elit. Sapiente molestias  adipisicing elit. Sapiente molestias  adipisicing elit. Sapiente molestias </p>
       </div>

       <div className="lotipes">
        <h4>Our Trusted Branding Partners</h4>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
       </div> 


       <div className="third">

       <div className="span1">
       <h1><span>Luan Latest News</span></h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  </p>
       </div>
          <div className="threebox">
            <div className="first-box">
              <img className='head' src={img} alt="" />
              <p className='fash'>FASHION15TH JUNE, 2021</p>
              <h2 className='loremsec'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Culpa nulla mollitia, </h2>
            </div>
            <div className="first-box">
              <img className='head' src={img1} alt="" />
              <p className='fash'>FASHION15TH JUNE, 2021</p>
              <h2 className='loremsec'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Culpa nulla mollitia, </h2>
            </div>
            <div className="first-box">
              <img className='head' src={img2} alt="" />
              <p className='fash'>FASHION15TH JUNE, 2021</p>
              <h2 className='loremsec'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Culpa nulla mollitia, </h2>
            </div>
          </div>

          <div className="subscribe">
            <div className="texter">
            <h1 className="su">Sign up now & get 10% off</h1>
            <p className="loremth">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <input className='inpput' type="text" placeholder='Enter your email address' /><button><LiaTelegramPlane className='lia'/>SUBSCRIBE NOW</button>
            </div>
          </div>
       </div>
      
       
       
    </div>
  )
}
