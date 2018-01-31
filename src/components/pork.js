import React from 'react';

const pork = [
  {
    itemEN: 'Special Braised Pork',
    itemCN: '红烧肉',
    price: 14.95
  },
  {
    itemEN: 'Hot Spicy Spare Ribs',
    itemCN: '香辣排骨*',
    price: 13.95
  },
  {
    itemEN: 'Salt & Pepper Spare Ribs',
    itemCN: '椒盐排骨',
    price: 13.95
  },
  {
    itemEN: 'Sichuan Style Stir Fried Pork Ribs',
    itemCN: '特色飘香排骨*',
    price: 14.95
  },
  {
    itemEN: 'Braised Pork Ribs w. Potato',
    itemCN: '川味红烧排骨*',
    price: 13.95
  },
  {
    itemEN: 'Sweet & Sour Pork Ribs',
    itemCN: '糖醋排骨',
    price: 13.95
  },
  {
    itemEN: 'Ma Po Tofu w. Minced Pork',
    itemCN: '麻婆肉末豆腐*',
    price: 10.95
  },
  {
    itemEN: 'Garlic Sauce Pork Meatball',
    itemCN: '鱼香狮子头*',
    price: 15.95
  },
  {
    itemEN: 'Braised Pork Meatball',
    itemCN: '红烧狮子头',
    price: 15.95
  },
  {
    itemEN: 'Double Cooked Pork Belly',
    itemCN: '回锅肉*',
    price: 11.95
  },
  {
    itemEN: 'Double Cooked Pork With Cabbage',
    itemCN: '包菜回锅肉*',
    price: 11.95
  },
  {
    itemEN: 'Sautéed Smoked Pork w. Mushroom',
    itemCN: '茶树菇腊肉*',
    price: 15.95
  },
  {
    itemEN: 'Stir Fried Pork w. Leek',
    itemCN: '蒜苗腊肉',
    price: 13.95
  },
  {
    itemEN: 'Hot Sauce Pork',
    itemCN: '水煮肉片*',
    price: 13.95
  },
  {
    itemEN: 'Stir Fried Shredded Pork w. Celery and Bean Curd',
    itemCN: '芹菜香干肉丝*',
    price: 12.95
  },
  {
    itemEN: 'Garlic Sauce Pork',
    itemCN: '鱼香肉丝*',
    price: 10.95
  },
  {
    itemEN: 'Sautéed Shredded Pork in Soy Sauce',
    itemCN: '京酱肉丝',
    price: 14.95
  },
  {
    itemEN: 'Shredded Pork w. Long Hot Pepper',
    itemCN: '小椒肉丝*',
    price: 12.95
  },
  {
    itemEN: 'Dry Fried Pork Intestines',
    itemCN: '干煸肥肠*',
    price: 15.95
  },
  {
    itemEN: 'Stir Fried Pork Intestine w. Long Hot Pepper',
    itemCN: '尖椒溜肥肠',
    price: 15.95
  },
  {
    itemEN: 'Dry Pepper Pork Intestine',
    itemCN: '香辣肥肠*',
    price: 15.95
  },
  {
    itemEN: 'Dry Pot Intestine',
    itemCN: '干锅肥肠*',
    price: 15.95
  },
  {
    itemEN: 'Braised Pork Intestines',
    itemCN: '卤肥肠',
    price: 15.95
  },
  {
    itemEN: 'Stir Fried Pork w. Leek in Black Sauce',
    itemCN: '盐煎肉',
    price: 11.95
  },
  {
    itemEN: 'Stir Fried Shredded Pork Kidney',
    itemCN: '火爆腰花**',
    price: 14.95
  },
  {
    itemEN: 'Pickled Cowpeas w. Minced Pork',
    itemCN: '肉沫泡豇豆*',
    price: 11.95
  },
  {
    itemEN: 'Dry Pepper Style Pork Feet',
    itemCN: '香辣猪蹄*',
    price: 15.95
  },
  {
    itemEN: 'Minced Pork w. Mei Fun Noodle',
    itemCN: '蚂蚁上树*',
    price: 11.95
  },
  {
    itemEN: 'Shredded Pork w. Chinese Vegetable',
    itemCN: '白菜肉丝',
    price: 12.95
  },
  {
    itemEN: 'Steamed Egg w. Minced Pork',
    itemCN: '肉沫蒸蛋',
    price: 13.95
  },
  {
    itemEN: 'Spiced Pork Belly w. Hot Pepper',
    itemCN: '尖椒卤肉*',
    price: 13.95
  },
  {
    itemEN: 'Braised Pig Feet',
    itemCN: '卤猪蹄',
    price: 15.95
  },
  {
    itemEN: 'Eggplant in Garlic Sauce',
    itemCN: '鱼香肉末茄子*',
    price: 10.95
  },
  {
    itemEN: 'Sichuan Style Steamed Eggplant w. Minced Pork',
    itemCN: '川东肉末小米茄**',
    price: 12.95
  }
]

const Pork = () =>
  <div className="pork">
    <h3 className="item-header">Pork 肉</h3>
    {pork.map((item, index) => {
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

export default Pork;
