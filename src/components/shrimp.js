import React from 'react';

const shrimp = [
  {
    itemEN: 'Stir Fried Shrimp w. Soft Tofu',
    itemCN: '虾仁滑嫩豆腐',
    price: 10.95
  },
  {
    itemEN: 'Stir Fried Shrimp w. Scrambled Egg',
    itemCN: '虾仁滑蛋',
    price: 13.95
  },
  {
    itemEN: 'Steamed Egg w. Clam',
    itemCN: '蛤蜊蒸蛋',
    price: 13.95
  },
  {
    itemEN: 'Sautéed Dry Pepper Shrimp',
    itemCN: '香辣虾*',
    price: 16.95
  },
  {
    itemEN: 'Shrimp w. Broccoli',
    itemCN: '芥兰虾',
    price: 13.95
  }
]

const Shrimp = () =>
  <div className="shrimp">
    <h3 className="item-header">Shrimp 虾</h3>
    {shrimp.map((item, index) => {
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

export default Shrimp;
