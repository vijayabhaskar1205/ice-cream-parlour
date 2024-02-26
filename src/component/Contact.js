import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './Contact.css';
import './Aq.css'
import './Foot.css'

export default function Contact() {
  return (
    <div>
             <Navbar collapseOnSelect expand="lg" className="nav ">
    
    <Navbar.Brand as={Link} to='/main' style={{marginLeft:"20px"}} >ICE-CREAM PARLOUR</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/main'>HOME</Nav.Link>
        <NavDropdown title="MENU" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to='/order'>ICE-CREAM </NavDropdown.Item>
        
        <NavDropdown.Item as={Link} to='/coneice'>chocolate-ice</NavDropdown.Item>
             
        
          
        </NavDropdown>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to='/About us'>ABOUT</Nav.Link>
      <Nav.Link as={Link} to='/contact'>CONTACT US</Nav.Link>
        <Nav.Link href="#deets"></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>

</Navbar>
<div className="bannerr"    data-aos="fade-up"
 data-aos-duration="1500">
     {/* <div className="content"> */}
         {/* <h3>Delicious Ice Cream</h3> */}
         {/* <h2>UPTO 50% OFF</h2> */}
         {/* <p>Everything is sweeter and more colorful with sprinkles on top. </p> */}
     {/* </div> */}
 </div>

<div id='map'>
<div className="detail" >
    <h3>Visit one of our location</h3>
  <li> <FaMap /><h6>Vilakkuthoon</h6>
  <h6>116a, S Masi St, Near-Vilakkuthoon, Mahal Area</h6>
  <h6> Madurai</h6><h6> Tamil Nadu 625001</h6></li> 
<li><FaPhoneAlt /><h6>9342571171</h6> </li>
<li><FaGoogle /><h6>Icecreamparlour@gmail.com</h6></li>
<li> <FaInstagram /><h6>Ice-cream-parlour</h6></li>
</div>
<div className="maps">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1934944542036!2d78.12100427479241!3d9.91783709018339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c51d56dbee01%3A0x92de6587fe74ed80!2sVilakkuthoon!5e0!3m2!1sen!2sin!4v1708838811264!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<div id="form-details">
<div className='cd'>
    <span>Leave a message</span>
    <h2>We love to hear from you!</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="mail" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
        <button class="normal">Submit</button>
        </div>
     <div class="people">
       
        <div>
            <img src="" alt=""/>
            <p><span>VB </span> Manager 
                <br/>phone: +000 123 0436 <br/>Email: contact@example.com</p>
        </div>
    </div>
</div>



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
</div> 
  
  )
}
