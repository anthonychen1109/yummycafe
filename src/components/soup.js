import React from 'react';

const soup = [
  {
    itemEN: 'Pig Feet Soup(2)',
    itemCN: '蹄花汤(2只)',
    price: 28
  },
  {
    itemEN: 'Pig Feet Soup(2)',
    itemCN: '蹄花汤(1只)',
    price: 15.95
  },
  {
    itemEN: 'Egg Drop w. Tomato Soup',
    itemCN: '番茄蛋花汤',
    price: 7.95
  },
  {
    itemEN: 'Egg Drop w. Seaweed Soup',
    itemCN: '紫菜蛋花汤',
    price: 6.95
  },
  {
    itemEN: 'Cabbage w. Tofu Soup',
    itemCN: '白菜豆腐汤',
    price: 8.95
  },
  {
    itemEN: 'Hot & Sour Soup',
    itemCN: '酸辣汤*',
    price: 6.95
  },
  {
    itemEN: 'Pork w. Pickled Vegetable Soup',
    itemCN: '酸菜肉丝汤',
    price: 7.95
  },
  {
    itemEN: 'Egg Drop Soup',
    itemCN: '蛋花汤',
    price: 6.95
  },
  {
    itemEN: 'West Lake Beef Soup',
    itemCN: '西湖牛肉羹汤',
    price: 8.95
  },
  {
    itemEN: 'Tomato and Pea Shoots w. Fried Egg Soup',
    itemCN: '番茄煎蛋豆苗汤',
    price: 11.95
  },
  {
    itemEN: 'Sweet Fermented Rice Soup w. Pineapple Cubes',
    itemCN: '酒酿果羹汤小份',
    price: 3.95
  },
  {
    itemEN: 'Sweet Fermented Rice Soup w. Pineapple Cubes(LG.)',
    itemCN: '酒酿果羹汤大份',
    price: 10.95
  },
]

const Soup = () =>
  <div className="soup">
    <h3 className="item-header">Soup 汤</h3>
    {soup.map((item, index) => {
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

export default Soup;
