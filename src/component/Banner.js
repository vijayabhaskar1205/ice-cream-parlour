import React from 'react'
import './Ban.css';
export default function Banner() {
  return (
    <div className="banner"    data-aos="fade-up"
    data-aos-duration="1500">
        <div className="content">
            <h3>Delicious Ice Cream</h3>
            <h2>UPTO 50% OFF</h2>
            <p>Everything is sweeter and more colorful with sprinkles on top.</p>
            <div id="btnorder"><button>Order Now</button></div>
        </div>
        <div className="img">
            <img src={require('../imagess/landing.jpg')} alt=""/>
        </div>
    </div>
  )
}
