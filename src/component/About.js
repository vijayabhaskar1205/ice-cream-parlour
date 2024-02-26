import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Foot.css';
import './About.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
export default function About() {
  return (
   <div>
         <Navbar collapseOnSelect expand="lg" className="nav ">
    
    <Navbar.Brand as={Link} to='/main' style={{marginLeft:"20px"}} >ICE-CREAM PARLOUR</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/main'>HOME</Nav.Link>
        <NavDropdown title="MENU" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to='/order'>ICE-CREAM</NavDropdown.Item>
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
<div className="banners"    data-aos="fade-up"
 data-aos-duration="1500">
     {/* <div classNameName="content"> */}
         {/* <h3>Delicious Ice Cream</h3> */}
         {/* <h2>UPTO 50% OFF</h2> */}
         {/* <p>Everything is sweeter and more colorful with sprinkles on top. </p> */}
     {/* </div> */}
   </div>
   <section id="about-head" className="section-p11">
    <img src="imagess/ba1.jpg" alt=""/>
    <div>
       <h2>Who we are?</h2>
       <p>
       At Ice Cream Parlor , we're passionate about creating memorable moments through our delicious frozen treats.
        Since 1988, we've been serving up scoops of happiness to our community, one cone at a time.
        lets you craft your own sundaes from a choice of exotic flavours, toppings and sauces. This unique brand from Hatsun Agro Product Ltd. 
        offers 36 flavours inspired from exotic places around the world, and aims to offer more choices and deliver greater standards of taste 
        to its customers. You can also pick from a whole range of ice cream cakes and create your own ice cream bars and cones.With 
        our world-inspired flavours,
         we believe we are giving you an ice cream experience that will take you across the globe from Peru to Australia.
        It all started with a simple idea: to craft the creamiest, most indulgent ice cream using only the finest ingredients. 
        From that spark of inspiration, Ice Cream Parlor was born.
         What began as a small shop has grown into a beloved destination for ice cream lovers of all ages.
         Prepare your taste buds for a journey of discovery! From classNameic favorites like creamy vanilla and rich 
         chocolate to innovative creations like salted  caramel swirl and raspberry cheesecake, we offer 
         a tantalizing array of flavors to suit every palate. 
         We also cater to dietary preferences, with dairy-free and vegan options available.
         At Ice Cream Parlor, we're more than just an ice cream shop — we're a gathering place for friends and family
         to come together and create lasting memories. Whether you're celebrating a special occasion or simply craving
         a sweet treat, we're here to make every visit a delightful experience.
         We invite you to step inside our parlour and experience the magic of Ice Cream Parlor. 
         From our friendly staff to our mouthwatering flavors, we're dedicated to making your visit unforgettable. 
         Come indulge in a scoop (or two!) of happiness today!
 
   </p>
         <br/>
          <marquee bgcolor="#cc65d5"  loop="-1" scrollamount="5" width="100%">
          At Ice Cream Parlor, we're passionate about creating memorable moments through our delicious frozen treats. Since 1988, 
          we've been serving up scoops of happiness to our community, one cone at a time.</marquee>   
    </div>
   </section>
  
<footer className="section-p12">
<div className='section-p1'>
    <div className="col">
        <img className="logo" src="" alt=""/>
        <h4>Contact</h4>
        <p><strong>Address:</strong>116a, S Masi St, Near-Vilakkuthoon, Mahal Are
 Madurai Tamil Nadu 625001</p>
        <p><strong>Phone:</strong> +01 2222 333 /(+91) 01 2345 6789</p>
        <p><strong>Hours:</strong> 10:00 - 8:00, Mon - Sat</p>
    
    <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
        <FaFacebook />
        <FaYoutube />
       <FaGoogle />
       <FaInstagram />
            
            
            
        </div>
    </div>
</div>
        <div className="col">
            <h4>About</h4>
           <p>About us</p>
           <p>Delivery Information</p>
           <p>Privacy Policy</p>
           <p>Terms & Condition</p>
           <p>Contact us</p>

        </div>

        <div className="col">
            <h4>My Account</h4>
           <p>Sign In</p>
           <p>View Cart</p>
           <p>My Wishlist</p>
           <p>Track My Order</p>
           <p>Help</p>
        </div>
         
        <div className="col install">
            <h4>Install App</h4>
            <p>From Apple Store or Google Play</p>         
        </div>
        </div>
        <div className="copyright">
 &copy; Copyright <strong>Ice-Cream Parlour</strong> .All Rights Reserved
 </div>
    </footer>
       
       
       
  </div>
   
   
   
   
   
   
   
   
   
   
   
   
  
   
  )
}
