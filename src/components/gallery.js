import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import GalleryModal from './modal';

// COMPONENTS
import Contact from './contact';
import Footer from './footer';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.JPG',
  '12.JPG',
  '13.JPG',
  '14.JPG',
  '15.JPG',
  '16.JPG',
  '17.JPG',
  '18.JPG',
  '19.JPG',
  '20.JPG',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
  '30.jpg',
  '31.JPG',
  '32.JPG',
  '33.JPG',
  '34.JPG',
  '35.JPG',
  '36.JPG',
  '37.JPG',
  '38.JPG',
  '39.JPG',
  '40.JPG',
  '41.JPG',
  '42.JPG',
  '43.JPG',
  '44.JPG',
  '45.JPG',
  '46.JPG',
  '47.JPG',
  '48.JPG',
  '49.JPG',
  '50.JPG',
  '51.JPG',
  '52.JPG',
  '53.JPG',
  '54.JPG',
  '55.JPG',
  '56.JPG',
  '57.JPG',
  '58.JPG',
  '60.JPG',
  '61.JPG',
  '63.JPG',
  '64.JPG',
  '65.JPG',
  '66.JPG',
  '67.JPG',
]

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  dropdownMenu() {
    let x = document.getElementById('dropdownClick');
    if (x.className === 'topnav') {
      x.className = 'responsive animated slideInDown';
    } else {
      x.className = 'topnav';
    }
  }
  render() {
    var masonryOptions = {
      transitionDuration: 0
    };
    const masonry = images.map(item => {
      return (
        <div key={item} className="grid-item">

          <GalleryModal image={require(`../static/images/${item}`)}/>
        </div>
      )
    })
    return (
      <div>
        <nav>
          <ul className="topnav" id="dropdownClick">
            <li className="logo"><a href="">Yummy Cafe</a></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#contact">Contact</a></li>
            <li id="test" className="dropdownIcon">
              <a href="javascript:void(0);"
                onClick={this.dropdownMenu}
                >
                &#9776;
              </a>
            </li>
          </ul>
        </nav>

        <div className="gallery-header">
          <div className="header-logo">
            <h1>Yummy Cafe</h1>
          </div>
        </div>
        <div id="gallery" className='gallery container'>
          <div>
            <h2>Gallery</h2>
          </div>
          <div>
            <Masonry
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {masonry}
          </Masonry>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Gallery;
