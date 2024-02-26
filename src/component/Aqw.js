import React from 'react'

export default function Aqw() {
  return (
    <div className="home">
    <div className="content" data-aos="zoom-out-right">
        <h3>Delicious
            <br/>Cakes Bakery
        </h3>
        <h2>Category <span className="changecontent"></span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
            <br/>Lorem ipsum dolor sit amet consectetur.
        </p>
        <a href="#" className="btn">Order Now</a>
    </div>
    <div className="img"  data-aos="zoom-out-left">
        <img src={require('../imagess/i211.jpg')}  alt=""/>
    </div>
</div>
  )
}
