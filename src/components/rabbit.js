import React from 'react';

const rabbit = [
  {
    itemEN: 'Dry Pot Rabbit',
    itemCN: '干锅兔*',
    price: 20.95
  },
  {
    itemEN: 'Spicy Rabbit Pot',
    itemCN: '干锅兔*',
    price: 24.95
  }
]

const Rabbit = () =>
  <div className="rabbit">
    <h3 className="item-header">Rabbit 兔</h3>
    {rabbit.map((item, index) => {
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

export default Rabbit;
