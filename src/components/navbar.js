import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropdownMenu = this.dropdownMenu.bind(this);
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
    return (
      <nav>
        <ul className="topnav" id="dropdownClick">
          <li className="logo"><a href="">Yummy Cafe</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a data-glf-cuid="4d098e5d-5767-4109-ae57-d4a4cf86748d" data-glf-ruid="66483f67-fcc1-45de-9915-d6bc795c1e3a" href="#">Order Online</a></li>
          <li><a href="/gallery">Gallery</a></li>
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
    );
  }
}

export default Navbar;
