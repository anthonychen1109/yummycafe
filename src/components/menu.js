import React, { Component } from 'react';

// COMPONENTS
import Appetizer from './appetizer';
import ColdDish from './cold_dish';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.showDisplay = this.showDisplay.bind(this);
  }

  showDisplay() {
    this.setState({ display: !this.state.display})
  }

  render() {
    console.log(this.state.display);
    return (
      <div className="container">
        <h2 className="menu-header">Menu</h2>
        <div className="menu">
          <div id="menu" className="menu-nav">
            <a href="#menu">Dim Sum/Appetizers 小吃</a>
            <a href="#menu">Cold Dish 凉菜</a>
            <a href="#menu">Soup 汤</a>
            <a href="#menu">Cook Specials 特色推荐</a>
            <a href="#menu">Noodle/Cold Noodle 面/凉面</a>
            <a href="#menu">Vegetables 什蔬</a>
            <a href="#menu">Chicken 鸡</a>
            <a href="#menu">Fish 鱼</a>
            <a href="#menu">Beef 牛</a>
            <a href="#menu">Shrimp 虾</a>
            <a href="#menu">Pork 肉</a>
            <a href="#menu">Duck鸭</a>
            <a href="#menu">Rabbit 兔</a>
            <a href="#menu">Rice Combo盖饭（with steamed white rice</a>
            <a href="#menu">Lo Mein 捞面</a>
            <a href="#menu">Fried Rice 炒饭</a>
          </div>
          <div className="menu-display">
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
