import React, { Component } from 'react';

// COMPONENTS
import Appetizer from './appetizer';
import ColdDish from './cold_dish';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: ''
    };
    this.setItem = this.setItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  setItem = (item) => {
    this.setState({currentItem: item});
  }

  renderItem = (item) => {
    console.log("renderItem", this.state.currentItem);
    switch(item) {
      case 'appetizer':
        return <Appetizer />
      case 'cold_dish':
        return <ColdDish />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="menu-header">Menu</h2>
        <div className="menu">
          <div className="menu-nav">
            <a href="#menu" onClick={() => this.setItem('appetizer')}>Dim Sum/Appetizers 小吃</a>
            <a href="#menu" onClick={() => this.setItem('cold_dish')}>Cold Dish 凉菜</a>
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
            <a href="#menu">Rice Combo盖饭（with steamed white rice)</a>
            <a href="#menu">Lo Mein 捞面</a>
            <a href="#menu">Fried Rice 炒饭</a>
          </div>
          <div id="menu" className="menu-display">
            {this.renderItem(this.state.currentItem)}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
