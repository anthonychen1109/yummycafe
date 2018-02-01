import React, { Component } from 'react';

// COMPONENTS
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Menu from './menu';
import Contact from './contact';
import Footer from './footer';
import Parallax from './parallax';

// IMAGES
import Parallax_img1 from '../static/images/2.jpg';
import Parallax_img2 from '../static/images/10.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Parallax img={Parallax_img1} />
        <Menu />
        <Parallax img={Parallax_img2} />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
