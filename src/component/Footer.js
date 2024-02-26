import React from 'react'
import './Foot.css';
function Footer() {
  return (
    <footer id="footer"    data-aos="fade-up"
    data-aos-duration="1500">
      <h1 className="text-center">Ice-Cream Parlour</h1>
      <p className="text-center">All gloomy weather is meaningless in the face of ice cream.</p>
      <div className="icons text-center">
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-google"></i>
          <i className="bx bxl-skype"></i>
          <i className="bx bxl-instagram"></i>
      </div>
      <div className="copyright text-center">
          &copy; Copyright <strong>Ice-Cream Parlour</strong> .All Rights Reserved
      </div>
     
    </footer>
  )
}

export default Footer;