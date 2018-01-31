import React from 'react';

const fish = [
  {
    itemEN: 'Sweet & Sour Fish Fillet',
    itemCN: '糖醋鱼片',
    price: 16.95
  },
  {
    itemEN: 'Hot Sauce Flounder Fillet',
    itemCN: '水煮鱼片*',
    price: 15.95
  },
  {
    itemEN: 'Pickled Vegetable Fish Fillet Hot Soup',
    itemCN: '酸菜鱼片*',
    price: 15.95
  },
  {
    itemEN: 'Spicy Flounder Fillet w. Soft Tofu',
    itemCN: '豆花鱼片*',
    price: 16.95
  },
  {
    itemEN: 'Flounder Fillet w. Veggie in Boiling Chili Oil',
    itemCN: '沸腾鱼片*',
    price: 16.95
  },
  {
    itemEN: 'Dry Pot Fish Fillet',
    itemCN: '干锅鱼片*',
    price: 16.95
  },
  {
    itemEN: 'Fish Fillet w. Tomato Soup',
    itemCN: '特色番茄清汤鱼片',
    price: 16.95
  },
  {
    itemEN: 'Flying Whole Tilapia w. Sweet & Sour Sauce',
    itemCN: '松鼠鱼',
    price: 32.95
  },
  {
    itemEN: 'Braised Whole Tilapia in Sweet Chili Soy Bean Sauce',
    itemCN: '豆瓣全鱼',
    price: 32.95
  },
  {
    itemEN: 'Braised Whole Tilapia w. Pickled Mustard',
    itemCN: '酸菜全鱼*',
    price: 32.95
  },
  {
    itemEN: 'Sichuan Style BBQ Whole Tilapia',
    itemCN: '烧烤全鱼*',
    price: 32.95
  }
]

const Fish = () =>
  <div className="fish">
    <h3 className="item-header">Fish 鱼</h3>
    {fish.map((item, index) => {
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

export default Fish;
