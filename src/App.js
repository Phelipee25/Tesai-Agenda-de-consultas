import React from 'react';
import './App.css';
import Register from './Screens/RegisterScreen';
import {Switch, Route} from 'react-router-dom'
import Appointment from './Screens/AppointmentScreen'
import Edit from './Screens/EditScreen'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Appointment}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/edit" component={Edit}></Route>
    </Switch>
  );
}

export default App;
