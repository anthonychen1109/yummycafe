import React from 'react';

const lomein = [
  {
    itemEN: 'Plain Lo Mein',
    itemCN: '净捞面',
    price: 7.95
  },
  {
    itemEN: 'Vegetable Lo Mein',
    itemCN: '菜捞面',
    price: 7.95
  },
  {
    itemEN: 'Chicken Lo Mein',
    itemCN: '鸡捞面',
    price: 7.95
  },
  {
    itemEN: 'Pork Lo Mein',
    itemCN: '猪肉丝捞面',
    price: 7.95
  },
  {
    itemEN: 'Shrimp Lo Mein',
    itemCN: '虾捞面',
    price: 8.95
  },
  {
    itemEN: 'Beef Lo Mein',
    itemCN: '牛捞面',
    price: 8.95
  },
  {
    itemEN: 'House Lo Mein',
    itemCN: '本楼捞面',
    price: 9.95
  }
]

const LoMein = () =>
  <div className="lomein">
    <h3 className="item-header">Lo Mein 捞面</h3>
    {lomein.map((item, index) => {
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

export default LoMein;
