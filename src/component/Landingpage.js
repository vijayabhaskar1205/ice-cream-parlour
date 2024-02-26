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
import { createRoot } from "react-dom/client";
import './Lan1.css';
import './Aqw.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
export default function Landingpage() {
  return (
    <div className='back'>
    <Navbar collapseOnSelect expand="lg" className="nav ">
 
     <Navbar.Brand style={{marginLeft:"20px"}} >ICE-CREAM PARLOUR</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
         {/* <Nav.Link href="#features">HOME</Nav.Link> */}
         
       </Nav>
       <Nav>
       <Nav.Link as={Link} to='/contact'>CONTACT US</Nav.Link>
         <Nav.Link as={Link} to='/About us'>ABOUT</Nav.Link>
         <Nav.Link as={Link} to='/sign'>SIGN UP</Nav.Link>
         
          
         <Nav.Link as={Link} to='/login' >LOGIN</Nav.Link>
       
         
         
         
       </Nav>
     </Navbar.Collapse>
 
 </Navbar>
 <div >
 <Row className='justify-content-center align-items-center'>
        <Col lg={12}>
        <Carousel>
        <Carousel.Item>
          {/* -----------------------aq.css------------- start*/}
        <div className="ome">
    <div className="content" data-aos="zoom-out-right">
        <h3>Delicious
            <br/>Ice-Cream
        </h3>
        <h3>Category:Chocolate</h3>
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
      <Carousel.Item interval={1000}>
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
<Carousel.Caption>
         
         <h4>     <p>Imagine a world where ice cream is illegal. I would never dream of being part of such a barbaric world.</p></h4>  
         </Carousel.Caption>
       </Carousel.Item>
</Carousel></Col>
      </Row>
    </div>
</div>
  )
}
