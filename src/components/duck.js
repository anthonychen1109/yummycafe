import React from 'react';

const duck = [
  {
    itemEN: 'Tea Smoked Duck(Half)',
    itemCN: '樟茶鸭(半只)',
    price: 16.95
  },
  {
    itemEN: 'Spicy Duck Tongue',
    itemCN: '麻辣鸭舌*',
    price: 15.95
  },
  {
    itemEN: 'Duck Tongue w. Basil',
    itemCN: '九层塔鸭舌',
    price: 15.95
  },
  {
    itemEN: 'Dry Pot Duck Tongue',
    itemCN: '干锅鸭舌*',
    price: 16.95
  }
]

const Duck = () =>
  <div className="duck">
    <h3 className="item-header">Duck鸭</h3>
    {duck.map((item, index) => {
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

export default Duck;
