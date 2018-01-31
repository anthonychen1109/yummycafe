import React, { Component } from 'react';

// COMPONENTS
import Appetizer from './appetizer';
import ColdDish from './cold_dish';
import Soup from './soup';
import CookSpecials from './cook_specials';
import Noodles from './noodles';
import Vegetables from './vegetables';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 'appetizer'
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
      case 'soup':
        return <Soup />
      case 'cook_specials':
        return <CookSpecials />
      case 'noodles':
        return <Noodles />
      case 'vegetables':
        return <Vegetables />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <div id="menu" className="menu">
          <div className="menu-nav">
            <h2 className="menu-header">Menu</h2>
            <a href="#menu" onClick={() => this.setItem('appetizer')}>Dim Sum/Appetizers 小吃</a>
            <a href="#menu" onClick={() => this.setItem('cold_dish')}>Cold Dish 凉菜</a>
            <a href="#menu" onClick={() => this.setItem('soup')}>Soup 汤</a>
            <a href="#menu" onClick={() => this.setItem('cook_specials')}>Cook Specials 特色推荐</a>
            <a href="#menu" onClick={() => this.setItem('noodles')}>Noodle/Cold Noodle 面/凉面</a>
            <a href="#menu" onClick={() => this.setItem('vegetables')}>Vegetables 什蔬</a>
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
          <div className="menu-display">
            {this.renderItem(this.state.currentItem)}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
