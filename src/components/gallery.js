import React from 'react';

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
]

const Gallery = () =>
  <div id="gallery" className='gallery container'>
    <div>
      <h2>Gallery</h2>
    </div>
    <div className="gallery-images">
      {images.map(item => {
        return (
          <div key={item}>
            <img src={require(`../static/images/${item}`)} alt={item}/>
          </div>
        )
      })}
    </div>
  </div>

export default Gallery;
