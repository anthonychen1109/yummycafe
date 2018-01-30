import React from 'react';

// COMPONENTS
import Navbar from './navbar';
import About from './about';
import Menu from './menu';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Menu />
      <Footer />
    </div>
  )
}

export default App;
