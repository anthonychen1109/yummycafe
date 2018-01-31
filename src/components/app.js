import React, { Component } from 'react';

// COMPONENTS
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Menu from './menu';
import Gallery from './gallery';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: ''
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <hr />
        <About />
        <hr />
        <Menu />
        <hr />
        <Contact />
        <hr />
        <Footer />
      </div>
    )
  }
}

export default App;
