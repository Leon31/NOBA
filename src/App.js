import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home'
import Gallery from './containers/Gallery'
import About from './containers/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <div class="menu">
            <a href="/" class={'menu_li' } id="liHome">Home</a>
            <a href="/gallery" class={'menu_li' } id="liGallery">Gallery</a>
            <a href="/about" class={'menu_li'} id="liAbout">About</a>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
