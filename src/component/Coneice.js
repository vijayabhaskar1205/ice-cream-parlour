import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Order.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cardss.css';
import './Cone.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
export default function Coneice() {
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
<div className="cone"    data-aos="fade-up"
 data-aos-duration="1500">
     {/* <div classNameName="content"> */}
         {/* <h3>Delicious Ice Cream</h3> */}
         {/* <h2>UPTO 50% OFF</h2> */}
         {/* <p>Everything is sweeter and more colorful with sprinkles on top. </p> */}
     {/* </div> */}
   </div>
   <h1 className='cs'>Order the declicious ice-cream</h1>
<div className='addto'>
<div className="container" id="box"    data-aos="fade-up"
data-aos-duration="1500">

<div className="row">
  <div className="col-md-4 py-3 py-md-0">
  <div className="car">
<Card style={{ width: '18rem' }}>
<img src={require('../imagess/card14.jpg')} alt=""/>
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
<img src={require('../imagess/card12.jpg')} alt=""/>
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
<img src={require('../imagess/card13.jpg')} alt=""/>
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

  <div className="col-md-4 py-3 py-md-0">
  <div className="car">
<Card style={{ width: '18rem' }}>
<img src={require('../imagess/top11.jpg')} alt=""/>
<Card.Body>
<Card.Title>Frozen Yogurt</Card.Title>
<Card.Text style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}> Just the mere thought of eating this blizzard-like </Card.Text>
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
  <div className="col-md-4 py-3 py-md-0">
  <div className="car">
<Card style={{ width: '18rem' }}>
<img src={require('../imagess/top4.jpg')} alt=""/>
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
<img src={require('../imagess/top7.jpg')} alt=""/>
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
<img src={require('../imagess/card14.jpg')} alt=""/>
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
<img src={require('../imagess/top8.png')} alt=""/>
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
<img src={require('../imagess/top7.jpg')} alt=""/>
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
<img src={require('../imagess/top8.png')} alt=""/>
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
<img src={require('../imagess/top6.jpg')} alt=""/>
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
  </div>
  </div>
   </div>
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





