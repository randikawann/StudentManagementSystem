import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import About from './components/About'
import Extra from './components/Extra'


class App extends Component {
  render() {
    return (
      <div class = "container">
      <BrowserRouter>
        <div>
          <Route exact path = "/" component = {Home} />
          <Route path = "/Home" component = {Home} />
          <Route path = "/signIn" component = {SignIn} />
          <Route path = "/signUp" component = {SignUp} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/about" component = {About} />
          <Route path = "/extra" component = {Extra} />
        </div>
      </BrowserRouter>
      </div>
    )
      
  }  

}

export default App;
