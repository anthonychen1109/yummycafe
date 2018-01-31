import React from 'react';

const appetizer = [
  {
    itemEN: 'Chicken w. Peanut in Special Made Chili Sauce',
    itemCN: '口水鸡 *',
    price: 10.95
  },
  {
    itemEN: 'House Special Sauce Chicken',
    itemCN: '怪味鸡*',
    price: 13.95
  },
  {
    itemEN: 'Pork Belly in Garlic Chili Sauce',
    itemCN: '蒜泥白肉*',
    price: 11.95
  },
  {
    itemEN: 'Sichuan Style Spicy Beef Jerky',
    itemCN: '麻辣牛肉干*',
    price: 12.95
  },
  {
    itemEN: 'Needle Mushroom and Shredded Beef Tripe in Spicy Sauce',
    itemCN: '金针牛百叶*',
    price: 10.95
  },
  {
    itemEN: 'Beef & Beef Tripe w. Peanut in Chili Oil',
    itemCN: '夫妻肺片*',
    price: 11.95
  },
  {
    itemEN: 'Rabbit Cube w. Peanut in Chili Oil',
    itemCN: '红油兔丁*',
    price: 14.95
  },
  {
    itemEN: 'Pork Tongue & Pork heart in Chili Oil',
    itemCN: '凉拌心舌*',
    price: 13.95
  },
  {
    itemEN: 'Wood Ear Mushroom Salad in Chili Sauce',
    itemCN: '凉拌木耳*',
    price: 9.95
  },
  {
    itemEN: 'Celery & Bean Curd Salad',
    itemCN: '凉拌香芹豆干*',
    price: 9.95
  },
  {
    itemEN: 'Sausage (Sweet/Spicy/Combo)',
    itemCN: '香肠 （广味／川味／拼盘）',
    price: 14.95
  }
]

const ColdDish = () =>
  <div className="cold_dish">
    <h3 className="item-header">Cold Dish 凉菜</h3>
    {appetizer.map((item, index) => {
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

export default ColdDish;
