import React from 'react';

const vegetables = [
  {
    itemEN: 'Sautéed Wood Ear Mushroom w. Yam',
    itemCN: '木耳炒山药',
    price: 10.95
  },
  {
    itemEN: 'Stir Fried Egg w. Wood Ear Mushroom',
    itemCN: '木耳炒蛋',
    price: 10.95
  },
  {
    itemEN: 'Chengdu Style Stir Fried Egg w. Tomato',
    itemCN: '成都番茄炒蛋（咸口',
    price: 9.95
  },
  {
    itemEN: 'Shanghai Style Stir Fried Egg w. Tomato',
    itemCN: '上海番茄炒蛋(甜口)',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Bok Choy w. Garlic',
    itemCN: '蒜炒上海青',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Bok Choy',
    itemCN: '清炒上海青',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Vegetable w. Dry Pepper',
    itemCN: '炝炒上海青*',
    price: 9.95
  },
  {
    itemEN: 'Bok Choy w. Black Mushroom',
    itemCN: '冬菇菜心',
    price: 10.95
  },
  {
    itemEN: 'Bok Choy w. Mushroom',
    itemCN: '蘑菇青菜',
    price: 9.95
  },
  {
    itemEN: 'Dry Sautéed String Bean',
    itemCN: '干煸四季豆',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Cabbage w. Dry pepper',
    itemCN: '炝炒莲白*',
    price: 9.95
  },
  {
    itemEN: 'Stir Fried Cabbage w. Vinegar Sauce',
    itemCN: '醋溜莲白',
    price: 9.95
  },
  {
    itemEN: 'Stir Fried Chinese Cabbage w. Vinegar Sauce',
    itemCN: '醋溜白菜',
    price: 9.95
  },
  {
    itemEN: 'Stir Fried Chinese Cabbage',
    itemCN: '清炒白菜',
    price: 9.95
  },
  {
    itemEN: 'Stir Fried Chinese Cabbage w. Pickle Chili',
    itemCN: '泡椒白菜*',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Pea Shoots',
    itemCN: '清炒豆苗',
    price: 13.95
  },
  {
    itemEN: 'Sautéed Pea Shoots w. Garlic',
    itemCN: '蒜炒豆苗',
    price: 13.95
  },
  {
    itemEN: 'Bourbon Fried Lettuce',
    itemCN: '蚝油生菜',
    price: 9.95
  },
  {
    itemEN: 'Long Hot Pepper Shredded Potato',
    itemCN: '小椒土豆丝',
    price: 9.95
  },
  {
    itemEN: 'Vinegar Shredded Potato',
    itemCN: '醋溜土豆丝',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Hot & Sour Shredded Potato',
    itemCN: '酸辣土豆丝*',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Three Vegetables(Eggplant, Potato, String Bean)',
    itemCN: '地三鲜',
    price: 13.95
  },
  {
    itemEN: 'Stir Fried Broccoli w. Garlic',
    itemCN: '蒜炒芥兰',
    price: 9.95
  },
  {
    itemEN: 'Broccoli w. Garlic Sauce',
    itemCN: '鱼香芥兰*',
    price: 9.95
  },
  {
    itemEN: 'Mixed Veg. w. Fried Tofu',
    itemCN: '家常炸豆腐*',
    price: 9.95
  },
  {
    itemEN: 'Stir Fried Egg w. Long Hot Pepper',
    itemCN: '尖椒炒蛋*',
    price: 11.95
  },
  {
    itemEN: 'Stir Fried Bean Sprouts',
    itemCN: '炒绿豆芽*',
    price: 9.95
  },
  {
    itemEN: "General Tso's Tofu",
    itemCN: '左宗豆腐',
    price: 9.95
  },
  {
    itemEN: 'Sesame Tofu',
    itemCN: '芝麻豆腐',
    price: 9.95
  },
  {
    itemEN: 'Sautéed Dry Tofu w. Celery',
    itemCN: '豆干芹菜*',
    price: 10.95
  },
  {
    itemEN: 'Long Hot Pepper Bean Curd',
    itemCN: '尖椒豆干*',
    price: 10.95
  },
  {
    itemEN: 'Dry Pot Vegetable',
    itemCN: '干锅素菜*',
    price: 14.95
  }
]

const Vegetables = () =>
  <div className="vegetables">
    <h3 className="item-header">Noodle/Cold Noodle 面/凉面</h3>
    {vegetables.map((item, index) => {
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

export default Vegetables;
