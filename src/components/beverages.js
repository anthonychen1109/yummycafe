import React from 'react';

const beverages = [
  {
    itemEN: 'water',
    can: '-',
    bottle: 1
  },
  {
    itemEN: 'Pepsi',
    can: 1,
    bottle: 2
  },
  {
    itemEN: 'Diet Pepsi',
    can: 1,
    bottle: 2
  },
  {
    itemEN: 'Mountain Dew',
    can: 1,
    bottle: 2
  },
  {
    itemEN: 'Ice Tea',
    can: 1,
    bottle: '-'
  },
  {
    itemEN: 'Lipton Peach Tea',
    can: '-',
    bottle: 2
  },
  {
    itemEN: 'Crush Orange',
    can: '-',
    bottle: 2
  },
  {
    itemEN: 'Crush Grape',
    can: '-',
    bottle: 2
  },
  {
    itemEN: '芦荟汁 Aloe Juice',
    can: '-',
    bottle: 2.5
  },
  {
    itemEN: '冰红茶 Ice Tea',
    can: '-',
    bottle: 2.5
  },
  {
    itemEN: '绿茶 Green Tea',
    can: '-',
    bottle: 2.5
  },
  {
    itemEN: '王老吉 Wang Lao Ji',
    can: '-',
    bottle: 2.5
  },
  {
    itemEN: '椰汁 Coconut Milk',
    can: '-',
    bottle: 2.5
  }
]

const Beverages = () =>
  <div className="beverages">
    <h3 className="item-header">Beverages</h3>
    <div className="grid">
      <div></div>
      <div>Can</div>
      <div>Bottle</div>
    </div>
    {beverages.map((item, index) => {
      return (
        <div key={item+index} className="grid animated fadeIn">
          <div>{item.itemEN}</div>
          <div>{item.can}</div>
          <div>{item.bottle}</div>
        </div>
      )
    }
    )}
  </div>

export default Beverages;
