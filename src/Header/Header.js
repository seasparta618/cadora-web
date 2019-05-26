import React, { Component } from 'react';


export default class Header extends Component {
  render(){
    return(
      <Navigation />
    )
  }
}

class Navigation extends Component {
  render(){
    return(
      <div className='Header' >
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Booking">Booking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Clinics">Clinics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/Aboutus" tabindex="-1" aria-disabled="true">About Us</a>
          </li>
        </ul>
      </div>
    )
  }
}
