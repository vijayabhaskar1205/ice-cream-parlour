import React from 'react'
import './Top.css';
export default function Topcards() {
  return (
    <div className='abc'>
    <div className="container" id="box"    data-aos="fade-up"
    data-aos-duration="1500">
        <div><h1 style={{fontStyle: 'oblique', color: 'pink'}}>TOP SELLING ICE-CREAM</h1></div>
      <div className="row">
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top7.jpg')} alt=""/>
                  <h4> Havmor</h4>
              </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top8.png')}alt=""/>
                  <h4> Frozen Yogurt</h4>
              </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top21.jpg')} alt=""/>
                  <h4> Dinshaw’s</h4>
              </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top3.jpg')}alt=""/>
                  <h4> Rolled Ice Cream</h4>
              </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top4.jpg')}alt=""/>
                 
                  <h4>  Cream Bell</h4>
              </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                  <img src={require('../imagess/top51.jpg')}alt=""/>
                  <h4> Top n Town</h4>
              </div>
          </div>
          
      </div>
    </div>
    </div>
  )
}
