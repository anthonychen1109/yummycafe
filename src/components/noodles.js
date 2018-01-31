import React from 'react';

const noodles = [
  {
    itemEN: 'Dan Dan Noodle',
    itemCN: '担担面*',
    price: 6.95
  },
  {
    itemEN: 'Sichuan Cold Noodle',
    itemCN: '四川凉面*',
    price: 6.95
  },
  {
    itemEN: 'Sesame Cold Noodle',
    itemCN: '怪味芝麻凉面',
    price: 6.95
  },
  {
    itemEN: 'Chengdu Spicy & Sour Mung Bean Rice Noodle',
    itemCN: '成都凉粉*',
    price: 6.95
  },
  {
    itemEN: 'Spicy Mung Bean Rice Noodle in Black Bean Sauce',
    itemCN: '川北凉粉*',
    price: 7.95
  },
  {
    itemEN: 'Hot & Sour Green Bean Noodle Soup',
    itemCN: '酸辣粉*',
    price: 7.95
  },
  {
    itemEN: 'Hot & Sour Intestine Green Bean Noodle Soup',
    itemCN: '酸辣肥肠粉*',
    price: 9.95
  },
  {
    itemEN: 'Pickled Vegetable Green Bean Noodle Soup',
    itemCN: '酸菜粉',
    price: 7.95
  },
  {
    itemEN: 'Spicy Braised Beef Noodle Soup',
    itemCN: '红烧牛肉面*',
    price: 8.95
  },
  {
    itemEN: 'Tomato w. Fried Egg Noodle Soup',
    itemCN: '番茄煎蛋面',
    price: 8.95
  },
  {
    itemEN: 'Braised Pork Ribs Noodle Soup',
    itemCN: '红烧排骨面*',
    price: 8.95
  },
  {
    itemEN: 'Shredded Pork w. Pickle Vegetable Noodle Soup',
    itemCN: '榨菜肉丝面',
    price: 8.95
  },
  {
    itemEN: 'Pork Ribs w. Pickle Vegetable Noodle Soup',
    itemCN: '酸菜排骨汤面*',
    price: 8.95
  },
  {
    itemEN: 'Minced Pork Noodle Soup',
    itemCN: '清汤杂酱面',
    price: 8.95
  },
  {
    itemEN: 'Minced Pork w. Pickle Cowpeas Noodles',
    itemCN: '碎肉泡豇豆面*',
    price: 8.95
  },
  {
    itemEN: 'Pickle Veggie Noodle Soup',
    itemCN: '酸菜刀削面',
    price: 11.95
  },
  {
    itemEN: 'Pepper and Ground Pork Wide Noodles',
    itemCN: '素椒杂酱面*',
    price: 11.95
  }
]

const Noodles = () =>
  <div className="noodles">
    <h3 className="item-header">Noodle/Cold Noodle 面/凉面</h3>
    {noodles.map((item, index) => {
      return (
        <div key={item+index} className="grid animated fadeIn">
          <div>{item.itemEN}</div>
          <div>{item.itemCN}</div>
          <div>{item.price}</div>
        </div>
      )
    }
    )}
  </div>

export default Noodles;
