import React from 'react';

const appetizer = [
  {
    itemEN: 'Scallion Pancake',
    itemCN: '葱油饼',
    price: 3.95
  },
  {
    itemEN: 'Spring Roll',
    itemCN: '春卷',
    price: 1.25
  },
  {
    itemEN: 'Sweet Donuts(10)',
    itemCN: '甜包(10)',
    price: 3.85
  },
  {
    itemEN: 'Fried Milk Bun(6)',
    itemCN: '炸小馒头(6)',
    price: 4.95
  },
  {
    itemEN: 'Sesame Red Bean Ball',
    itemCN: '芝麻球',
    price: 4.95
  },
  {
    itemEN: 'Handmade Pork Dumplings in Chili Sauce',
    itemCN: '红油水饺 *',
    price: 6.95
  },
  {
    itemEN: 'Hand-Folded Pork Wontons Soup',
    itemCN: '成都抄手(原汤)',
    price: 6.95
  },
  {
    itemEN: 'Chili Oil Wontons Soup',
    itemCN: '成都抄手(红油)*',
    price: 6.95
  },
  {
    itemEN: 'Hot & Sour Wonton Soup',
    itemCN: '抄手(酸辣) *',
    price: 6.95
  }
]

const Appetizer = () =>
  <div className="appetizer">
    <h3 className="item-header">Dim Sum/Appetizers小吃</h3>
    {appetizer.map((item, index) => {
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

export default Appetizer;
