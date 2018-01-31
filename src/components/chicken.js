import React from 'react';

const chicken = [
  {
    itemEN: 'Sautéed Three Pepper Chicken',
    itemCN: '三椒煸鸡*',
    price: 12.95
  },
  {
    itemEN: 'Sichuan Style Kung Pao Chicken',
    itemCN: '四川宫保鸡丁*',
    price: 11.95
  },
  {
    itemEN: 'Dry Pepper Chicken',
    itemCN: '成都辣子鸡丁*',
    price: 11.95
  },
  {
    itemEN: 'Dry Pot Chicken',
    itemCN: '干锅鸡*',
    price: 16.95
  },
  {
    itemEN: 'Hot Sautéed Chicken w. Pickled Vegetable',
    itemCN: '炝锅鸡*',
    price: 12.95
  },
  {
    itemEN: 'Three Cup Chicken',
    itemCN: '三杯鸡',
    price: 12.95
  },
  {
    itemEN: "General Tso's Chicken",
    itemCN: '芝麻鸡',
    price: 10.95
  },
  {
    itemEN: 'Chicken w. Broccoli',
    itemCN: '芥兰鸡',
    price: 10.95
  },
  {
    itemEN: 'Sesame Chicken',
    itemCN: '芝麻鸡',
    price: 10.95
  },
  {
    itemEN: 'Orange Chicken',
    itemCN: '陈皮鸡',
    price: 10.95
  },
  {
    itemEN: 'Chicken w. String Bean',
    itemCN: '四季豆鸡',
    price: 10.95
  },
  {
    itemEN: "General Tso's Chicken",
    itemCN: '左宗鸡*',
    price: 10.95
  },
  {
    itemEN: 'Chicken w. Garlic Sauce',
    itemCN: '鱼香鸡片*',
    price: 10.95
  },
  {
    itemEN: 'Stir Fried Chicken w. Mushroom',
    itemCN: '蘑菇鸡片',
    price: 10.95
  },

]

const Chicken = () =>
  <div className="chicken">
    <h3 className="item-header">Chicken 鸡</h3>
    {chicken.map((item, index) => {
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

export default Chicken;
