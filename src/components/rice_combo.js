import React from 'react';

const rice_combo = [
  {
    itemEN: 'Stir Fried Egg w. Tomato Style Rice Bowl',
    itemCN: '番茄炒蛋盖饭',
    price: 7.95
  },
  {
    itemEN: 'Garlic Sauce Pork Rice Bowl',
    itemCN: '鱼香肉丝盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Eggplant w. Garlic Sauce Rice Bowl',
    itemCN: '鱼香茄子盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Garlic Sauce Chicken Rice Bowl',
    itemCN: '鱼香鸡片盖饭*',
    price: 7.95
  },
  {
    itemEN: 'House Special Beef Rice Bowl',
    itemCN: '红烧牛肉盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Stir Fried Chicken w. Mushroom Rice Bowl',
    itemCN: '蘑菇鸡片盖饭',
    price: 7.95
  },
  {
    itemEN: 'Braised Spare Ribs w. Potato Rice Bowl',
    itemCN: '土豆排骨盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Long Hot Pepper Pork Rice Bowl',
    itemCN: '小椒肉丝盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Long Hot Pepper Beef Rice Bowl',
    itemCN: '小椒牛肉丝盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Kung Pao Chicken Rice Bowl',
    itemCN: '宫保鸡丁盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Ma Po Tofu Rice Bowl',
    itemCN: '麻婆豆腐盖饭*',
    price: 7.95
  },
  {
    itemEN: 'Ma Po Tofu w. Ground Pork rice bowl',
    itemCN: '麻婆豆腐碎肉盖饭*',
    price: 7.95
  }
]

const RiceCombo = () =>
  <div className="rice_combo">
    <h3 className="item-header">Rice Combo盖饭（with steamed white rice</h3>
    {rice_combo.map((item, index) => {
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

export default RiceCombo;
