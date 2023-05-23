// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Ajay";
  render() {
    return (
      <div>
        {/* Hello My First Class Based Component {this.c} */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}

