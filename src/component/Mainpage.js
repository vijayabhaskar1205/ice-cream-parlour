// import React, { useState } from 'react';
import React from 'react'
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createRoot } from "react-dom/client";
import './Aq.css';
import './Aqw.css';
import './Top.css';
import './Ban.css';
import './Cardss.css';
import './Foot.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Figure from 'react-bootstrap/Figure';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
export default function Mainpage() {
  
  return (
     <div className='back'>
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
    <div >
  
      <Row className='justify-content-center align-items-center'>
        <Col lg={12}>
        <Carousel>
        <Carousel.Item>
          {/* -----------------------aq.css------------- start*/}
        <div className="home">
    <div className="content" data-aos="zoom-out-right">
        <h3>Delicious
            <br/>Ice-Cream
        </h3>
        <h2>Category <span className="changecontent"></span></h2>
        <p>A little lick of frozen cream every now and then, goes a long, long way.
            <br/>A surprise in every lick.</p>
        <a href="#" className="btn">Order Now</a>
    </div>
    <div className="img"  data-aos="zoom-out-left">
        <img src={require('../imagess/second.png')}  alt=""/>
    </div>
</div>
  {/* -----------------------aq.css------------- end*/}
        <Carousel.Caption>
          <h4 style={{color: 'white', textShadow: 'inherit'}}>If there is a moment in my life that I would like to experience all over again, it would be the very first time I tasted ice cream</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
         {/* -----------------------aqw.css------------- start*/}
      <div className="hom">
    <div className="content" data-aos="zoom-out-right">
        <h3>Delicious
            <br/>ice cream
        </h3>
        <h2>Category <span className="changecontent"></span></h2>
     <h4> <p>Ice cream is a currency of happiness and delight.
        </p></h4>  
        <a href="#" className="btn">Order Now</a>
    </div>
    <div className="img"  data-aos="zoom-out-left">
        <img src={require('../imagess/i211.jpg')}  alt=""/>
    </div>
</div>
  {/* -----------------------aqw.css------------- end*/}
        <Carousel.Caption>
         
        <h4>     <p>Imagine a world where ice cream is illegal. I would never dream of being part of such a barbaric world.</p></h4>  
        </Carousel.Caption>
      </Carousel.Item>
     
     
     
     
     
     
     
      </Carousel></Col>
      </Row>
    {/* ----------------------------------top selling ice cream---------------------------------------- */}
    </div>
    <div className='abc'>
    <div className="container" id="box"    data-aos="fade-up"
    data-aos-duration="1500">
        <div><h1 style={{fontStyle: 'oblique', color: 'pink'}}>TOP SELLING ICE-CREAM</h1></div>
      <div className="row">
          <div className="col-md-3 py-2 py-md-0">
              <div className="card">
   
       <img src={require('../imagess/top7.jpg')}alt="" />
  
         <h4> Havmor</h4>
              </div>
          </div>
          <div className="col-md-3 py-2 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top8.png')}alt=""/>
                  <h4> Frozen Yogurt</h4>
              </div>
          </div>
          <div className="col-md-3 py-1 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top21.jpg')} alt=""/>
                  <h4> Dinshaw’s</h4>
              </div>
          </div>
          <div className="col-md-3 py-2 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top3.jpg')}alt=""/>
                  <h4> Rolled Ice Cream</h4>
              </div>
          </div>
          <div className="col-md-3 py-2 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top4.jpg')}alt=""/>
                 
                  <h4>  Cream Bell</h4>
              </div>
          </div>
          <div className="col-md-3 py-2 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top51.jpg')}alt=""/>
                  <h4> Top n Town</h4>
              </div>
          </div>
          <div className="col-md-3 py-2 py-md-0">
     <div className="card">
         <img src={require('../imagess/top61.jpg')}alt=""/>
         <h4> cown Ice</h4>
     </div>
 </div>
 <div className="col-md-3 py-2 py-md-0">
     <div className="card">
         <img src={require('../imagess/top111.jpg')}alt=""/>
         <h4> Bucket Ice</h4>
     </div>
 </div>
 
      </div>
    </div>
    </div>
    {/* --------------------------------banner------------------------------------------ */}
    <div className="banner"    data-aos="fade-up"
    data-aos-duration="1500">
        <div className="content">
            <h3>Delicious Ice Cream</h3>
            <h2>UPTO 50% OFF</h2>
            <p>Everything is sweeter and more colorful with sprinkles on top. </p>
            <div id="btnorder"><button>Order Now</button></div>
        </div>
        <div className="img">
            <img src={require('../imagess/landing.jpg')} alt=""/>
        </div>
    </div>
    {/* ----------------------------cards-------------------------------------------- */}
    <div className='a'>
    <div className="container" id="box"    data-aos="fade-up"
    data-aos-duration="1500">
        <div><h3 style={{fontStyle: 'oblique', color: 'pink'}}>Chocolate ice</h3></div>
      <div className="row">
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top7.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Havmor</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Let’s scoot into a world of scoops.   </Card.Text>
        <img src={require('../imagess/threest.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 100</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top21.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Dinshaw’s</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Cold treats are my kind of comfort food.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 140</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top3.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Rolled Ice Cream</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Ice cream plus me is equal to happy me!
</Card.Text>
        <img src={require('../imagess/threest.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 100</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div><h3 style={{fontStyle: 'oblique', color: 'brown'}}>Vennila ice</h3></div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top8.png')} alt=""/>
      <Card.Body>
        <Card.Title>Frozen Yogurt</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Just the mere thought of eating this blizzard-like treat is putting pounds on me.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 180</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top4.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>  Cream Bell</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Can’t cone-trol my sweet cravings.</Card.Text>
        <img src={require('../imagess/threest.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 100</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top51.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Top n Town</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Cold treats are my kind of comfort food.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 160</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/scotchandbrownie.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>scotchandbrownie</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Let’s scoot into a world of scoops.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 120</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/strawberry.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Strawberry</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Cold treats are my kind of comfort food.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 180</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          <div className="col-md-4 py-3 py-md-0">
          <div className="car">
        <Card style={{ width: '18rem' }}>
        <img src={require('../imagess/top1.jpg')} alt=""/>
      <Card.Body>
        <Card.Title>Bucket ice</Card.Title>
        <Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> ce cream plus me is equal to happy me!.</Card.Text>
        <img src={require('../imagess/fourst.jpg')} alt="" width={140} />
        <br/>
     <h6>  <img src={require('../imagess/rupee.png')} alt="" width={10} /> 150</h6> 
    <Button variant="primary">Order Now</Button> 
         </Card.Body>
    </Card>
     </div> 
          </div>
          </div>
          </div>
           </div>
           <footer id="footer"    data-aos="fade-up"
    data-aos-duration="1500">
      <h1 className="text-center">Ice-Cream Parlour</h1>
      <p className="text-center">All gloomy weather is meaningless in the face of ice cream.</p>
     
      <footer className="section-p12m">
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
 
 
 
    </footer>
       
     
     
     
     
     
      <div className="copyright text-center">
          &copy; Copyright <strong>Ice-Cream Parlour</strong> .All Rights Reserved
      </div>
     
    </footer>
     </div>
    
  )
}

