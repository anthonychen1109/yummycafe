import React from 'react';

const beef = [
  {
    itemEN: 'Pickled Chili Peppers w. Beef Soup',
    itemCN: '三椒酸汤肥牛*',
    price: 18.95
  },
  {
    itemEN: 'Hot Sauce Beef',
    itemCN: '水煮牛*',
    price: 15.95
  },
  {
    itemEN: 'Cook Special Hot Pot Style Beef',
    itemCN: '飘香牛柳*',
    price: 24.95
  },
  {
    itemEN: 'Braised Beef w. Potato',
    itemCN: '红烧牛肉*',
    price: 14.95
  },
  {
    itemEN: 'Dry Fried Beef',
    itemCN: '干煸牛肉丝*',
    price: 14.95
  },
  {
    itemEN: 'Scallion Beef',
    itemCN: '葱爆牛肉丝',
    price: 12.95
  },
  {
    itemEN: 'Long Hot Pepper Beef',
    itemCN: '小椒牛肉丝*',
    price: 12.95
  },
  {
    itemEN: 'Braised Beef w. Tofu',
    itemCN: '豆腐烧牛肉*',
    price: 14.95
  },
  {
    itemEN: 'Cumin Beef',
    itemCN: '孜然牛*',
    price: 15.95
  },
  {
    itemEN: 'Beef Tripe and Bamboo shoots w. Pickle Chili',
    itemCN: '火爆牛百叶 **',
    price: 15.95
  },
  {
    itemEN: 'Dry Pot Beef',
    itemCN: '干锅牛肉*',
    price: 16.95
  },
  {
    itemEN: 'Dry Pot Beef and Beef Tendon',
    itemCN: '干锅牛筋*',
    price: 18.95
  },
  {
    itemEN: 'Dry Pot Beef and Beef Tripe',
    itemCN: '干锅牛杂*',
    price: 16.95
  },
  {
    itemEN: 'Dry Pot Beef Belly',
    itemCN: '干锅肥牛*',
    price: 17.95
  },
  {
    itemEN: 'Beef w. Broccoli',
    itemCN: '芥兰牛',
    price: 12.95
  },
  {
    itemEN: 'Szechuan Beef',
    itemCN: '四川牛',
    price: 12.95
  }
]

const Beef = () =>
  <div className="beef">
    <h3 className="item-header">Beef 牛</h3>
    {beef.map((item, index) => {
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

export default Beef;
