import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact container">
      <div className="contact-location">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.428703385703!2d-77.85960328518996!3d40.79657224037531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea8a052a2975d%3A0xcadfb450f19633d!2s320+E+Calder+Way%2C+State+College%2C+PA+16801!5e0!3m2!1sen!2sus!4v1517368426532"
        height="300px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>
      <div className="contact-address">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div>
            <p>
              320 E Calder Way
              State College PA 16801
            </p>
          </div>
          <div>
            <p>
              Phone:
            </p>
            <p>
              814-308-9826
              <br />
              814-308-9828
            </p>
            <div>
              <p>
                Hours:
              </p>
              <p>
                Monday 1:00 PM to 12:00 AM
                <br />
                Tuesday 1:00 PM to 12:00 AM
                <br />
                Wednesday 1:00 PM to 12:00 AM
                <br />
                Thursday 1:00 PM to 12:00 AM
                <br />
                Friday 1:00 PM to 1:00 AM
                <br />
                Saturday 1:00 PM to 1:00 AM
                <br />
                Sunday 1:00 PM to 12:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Contact;
