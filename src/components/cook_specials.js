import React from 'react';

const cook_specials = [
  {
    itemEN: 'Mixed Vegetable and Meet Hot Pot',
    itemCN: '老成都冒菜*',
    price: 28.95
  },
  {
    itemEN: 'Hot Sauce Hot Pot',
    itemCN: '特色盆盆香*',
    price: 28.95
  },
  {
    itemEN: 'Spicy Pot',
    itemCN: '麻辣香锅*',
    price: 16.95
  },
  {
    itemEN: 'Hot Pot Chicken w. Mixed Food',
    itemCN: '特色火锅鸡*',
    price: 42.95
  },
  {
    itemEN: 'Sichuan Style Braised Chicken',
    itemCN: '鲜烧土鸡(带骨) *',
    price: 27.95
  },
  {
    itemEN: 'Sautéed Spicy Chicken With Potato',
    itemCN: '大盘鸡*',
    price: 27.95
  },
  {
    itemEN: 'Steamed Salmon Head With Diced Hot Red Peppers',
    itemCN: '川味剁椒鱼头**',
    price: 30.95
  }
]

const CookSpecials = () =>
  <div className="cook_specials">
    <h3 className="item-header">Cook Specials特色推荐</h3>
    {cook_specials.map((item, index) => {
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

export default CookSpecials;
