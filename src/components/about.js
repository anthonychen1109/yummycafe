import React from 'react';

const About = () =>
  <div className="about container">
    <div className="about-image">
      <img src={require('../static/images/1.jpg')} alt="image-1"/>
    </div>
    <div className="about-text">
      <h2>About Us</h2>
      <p>
        We are a Chinese restaurant located in the heart of downtown State College. Our restaurant specializes in authentic Sichuan, also known as "Szechuan" Cuisine.
      </p>
      <br />
      <p>
        Sichuan cuisine is one of four major Chinese cuisines originated from Sichuan, China. It is famous for its spicy, savory, and flavorful tastes; and it also requires different cooking methods using variety of seasonings. We have 20 years of experience in making the hot pot sauce, and our chefs are are professional in cooking traditional Sichuan dishes.
      </p>
      <br />
      <p>
        Our goal is to bring you the original flavor from our hometown Sichuan, and share the interesting stories and memories from China with you.
      </p>
    </div>
  </div>

export default About;
