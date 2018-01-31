import React from 'react';

// COMPONENTS
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Menu from './menu';
import Gallery from './gallery';
import Contact from './contact';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
