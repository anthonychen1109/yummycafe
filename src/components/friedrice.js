import React from 'react';

const friedrice = [
  {
    itemEN: 'Vegetable Fried Rice',
    itemCN: '菜炒饭',
    price: 7.95
  },
  {
    itemEN: 'Egg w. Tomato Fried Rice',
    itemCN: '番茄蛋炒饭',
    price: 7.95
  },
  {
    itemEN: 'Egg Fried Rice',
    itemCN: '蛋炒饭',
    price: 7.95
  },
  {
    itemEN: 'Chicken Fried Rice',
    itemCN: '鸡炒饭',
    price: 7.95
  },
  {
    itemEN: 'Pork Fried Rice',
    itemCN: '猪肉丝炒饭',
    price: 7.95
  },
  {
    itemEN: 'Shrimp Fried Rice',
    itemCN: '虾炒饭',
    price: 8.95
  },
  {
    itemEN: 'Beef Fried Rice',
    itemCN: '牛炒饭',
    price: 8.95
  },
  {
    itemEN: 'House Special Fried Rice',
    itemCN: '本楼炒饭',
    price: 9.95
  },
  {
    itemEN: 'Yang Chow Fried Rice',
    itemCN: '扬州炒饭',
    price: 9.95
  }
]

const FriedRice = () =>
  <div className="friedrice">
    <h3 className="item-header">Fried Rice 炒饭</h3>
    {friedrice.map((item, index) => {
      return (
        <div key={item+index} className="grid animated fadeIn">
          <div>{item.itemEN}</div>
          <div>{item.itemCN}</div>
          <div>{item.price}</div>
        </div>
      )
    }
    )}
    <br />
    <div className="brownrice">
      <em>
        <p>
          <strong>＊</strong>
            为辣的意思 有＊的菜可添加附加选项 微辣 正常辣 超级辣
            每道菜配一份米饭，小吃、面食和汤除外。
            加一份米饭1元
      </p></em>
    </div>
  </div>

export default FriedRice;
