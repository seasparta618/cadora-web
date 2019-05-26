import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css'

// Componnets
import Home from './Home/Home.js';
import Booking from './Booking/Booking.js';
import Clinics from './Clinics/Clinics.js';
import Aboutus from './Aboutus/Aboutus.js';

export default class Main extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Booking' component={Booking}/>
          <Route path='/Clinics' component={Clinics}/>
          <Route path='/Aboutus' component={Aboutus}/>
        </Switch>
      </div>
    )
  }
}
