import React, { Component } from 'react';


export default class Header extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <Carousel />
      </div>
    )
  }
}

class Navigation extends Component {
  render(){
    return(
      <div className='Header' >
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Booking">Booking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Clinics">Clinics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/Aboutus" tabIndex="-1" aria-disabled="true">About Us</a>
          </li>
        </ul>
      </div>
    )
  }
}

class Carousel extends Component {
  render(){
    return(
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.apah24.com/sites/default/files/apah24slide1.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://piaa.net.au/wp-content/uploads/2018/01/bigstock-Cute-friendly-pets-on-white-ba-169871522.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="http://www.royalpetcareinc.com/wp-content/uploads/2016/11/pets_big.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
