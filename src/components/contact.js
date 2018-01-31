import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact container">
      <h2>Contact Us</h2>
      <div className="contact-address">
      </div>
      <div className="contact-location">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.428703385703!2d-77.85960328518996!3d40.79657224037531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea8a052a2975d%3A0xcadfb450f19633d!2s320+E+Calder+Way%2C+State+College%2C+PA+16801!5e0!3m2!1sen!2sus!4v1517368426532"
        height="300px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>
    </div>
  </div>

export default Contact;
