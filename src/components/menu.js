import React, { Component } from 'react';

// COMPONENTS
import Appetizer from './appetizer';
import ColdDish from './cold_dish';
import Soup from './soup';
import CookSpecials from './cook_specials';
import Noodles from './noodles';
import Vegetables from './vegetables';
import Chicken from './chicken';
import Fish from './fish';
import Beef from './beef';
import Shrimp from './shrimp';
import Pork from './pork';
import Duck from './duck';
import Rabbit from './rabbit';
import RiceCombo from './rice_combo';
import LoMein from './lomein';
import FriedRice from './friedrice';
import Beverages from './beverages';

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
      case 'chicken':
        return <Chicken />
      case 'fish':
        return <Fish />
      case 'beef':
        return <Beef />
      case 'shrimp':
        return <Shrimp />
      case 'pork':
        return <Pork />
      case 'duck':
        return <Duck />
      case 'rabbit':
        return <Rabbit />
      case 'rice_combo':
        return <RiceCombo />
      case 'lomein':
        return <LoMein />
      case 'friedrice':
        return <FriedRice />
      case 'beverages':
        return <Beverages />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <div className="menu-nav">
            <h2 className="menu-header">Menu</h2>
            <a href="#menu" onClick={() => this.setItem('appetizer')}>Dim Sum/Appetizers 小吃</a>
            <a href="#menu" onClick={() => this.setItem('cold_dish')}>Cold Dish 凉菜</a>
            <a href="#menu" onClick={() => this.setItem('soup')}>Soup 汤</a>
            <a href="#menu" onClick={() => this.setItem('cook_specials')}>Cook Specials 特色推荐</a>
            <a href="#menu" onClick={() => this.setItem('noodles')}>Noodle/Cold Noodle 面/凉面</a>
            <a href="#menu" onClick={() => this.setItem('vegetables')}>Vegetables 什蔬</a>
            <a href="#menu" onClick={() => this.setItem('chicken')}>Chicken 鸡</a>
            <a href="#menu" onClick={() => this.setItem('fish')}>Fish 鱼</a>
            <a href="#menu" onClick={() => this.setItem('beef')}>Beef 牛</a>
            <a href="#menu" onClick={() => this.setItem('shrimp')}>Shrimp 虾</a>
            <a href="#menu" onClick={() => this.setItem('pork')}>Pork 肉</a>
            <a href="#menu" onClick={() => this.setItem('duck')}>Duck鸭</a>
            <a href="#menu" onClick={() => this.setItem('rabbit')}>Rabbit 兔</a>
            <a href="#menu" onClick={() => this.setItem('rice_combo')}>Rice Combo 盖饭（with steamed white rice)</a>
            <a href="#menu" onClick={() => this.setItem('lomein')}>Lo Mein 捞面</a>
            <a href="#menu" onClick={() => this.setItem('friedrice')}>Fried Rice 炒饭</a>
            <a href="#menu" onClick={() => this.setItem('beverages')}>Beverages</a>
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
