import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
   zIndex            : 9999,
   position          : 'fixed',
   top               : 0,
   left              : 0,
   right             : 0,
   bottom            : 0,
   backgroundColor   : 'rgba(255, 255, 255, 0.75)'
 },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hoursModalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openHoursModal = this.openHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openHoursModal() {
    this.setState({hoursModalIsOpen: true})
  }

  closeHoursModal() {
    this.setState({hoursModalIsOpen: false});
  }

  render() {
    return (
      <nav>
        <ul className="footer">
          <li>320 E Calder Way
            State College PA 16801
          </li>
            <li className="footer-hours" onClick={this.openHoursModal}>
              <span>Hours</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.hoursModalIsOpen}
                  onRequestClose={this.closeHoursModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <h5 className="text-center">Hours</h5>
                <br />
                <div className="modal-hours">
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
              </Modal>
            </li>
              <li>mon-fri: 11:00am-9:00pm</li>
              <li>sat-sun: 11:30am-9:00pm</li>
            <li className="footer-pin">
              <span role="img" aria-label="Pin" onClick={this.openModal}>&#x1f4cc; map</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Yummy Cafe</p>
                <iframe
                  title="Yummy Cafe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4288881558496!2d-77.8617919671486!3d40.796568179322755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea8a052a2975d%3A0xcadfb450f19633d!2s320+E+Calder+Way%2C+State+College%2C+PA+16801!5e0!3m2!1sen!2sus!4v1517501252309"
                  width="100%"
                  height="300px"
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </Modal>
            </li>
          <li className="footer-tel"><span role="img" aria-label="Phone1">&#128222;</span> 814-308-9826/9828</li>
          <li id="footer-tel"><span role="img" aria-label="Phone2">&#128222;</span> 814-308-9826</li>
          <li id="footer-tel"><span role="img" aria-label="Phone3">&#128222;</span> 814-308-9828</li>
        </ul>
      </nav>
    )
  }
}

export default Footer;
