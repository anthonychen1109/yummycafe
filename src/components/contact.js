import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact">
      <div className="contact-location container">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.428703385703!2d-77.85960328518996!3d40.79657224037531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea8a052a2975d%3A0xcadfb450f19633d!2s320+E+Calder+Way%2C+State+College%2C+PA+16801!5e0!3m2!1sen!2sus!4v1517368426532"
        height="300px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>
      <div className="contact-info">
        <div className="contact-box">
          <h2 className="contact-header">Contact</h2>
          <br />
          <p>
            <strong>
              320 E Calder Way
            <br />
              State College PA 16801
            </strong>
          </p>
          <p>
            <strong>PHONE</strong>
            <br />
              814-308-9826
            <br />
              814-308-9828
          </p>
          <br />
          <p><strong>HOURS</strong></p>
          <p>
            Monday 11:00 AM to 9:00 PM
            <br />
            Tuesday 11:00 AM to 9:00 PM
            <br />
            Wednesday 11:00 AM to 9:00 PM
            <br />
            Thursday 11:00 AM to 9:00 PM
            <br />
            Friday 11:00 AM to 9:00 PM
            <br />
            Saturday 11:30 AM to 9:00 PM
            <br />
            Sunday 11:30 AM to 9:00 PM
          </p>
        </div>
      </div>
    </div>
  </div>

export default Contact;
