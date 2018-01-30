import React from 'react';

const appetizer = [
  {
    itemEN: 'Chicken w. Peanut in Special Made Chili Sauce',
    itemCN: '口水鸡 *',
    price: 10.95,
  },
]

const ColdDish = () =>
  <div className="appetizer">
    <h3>Cold Dish 凉菜</h3>
    {appetizer.map((item, index) => {
      return (
        <table key={item+index}>
          <tbody>
            <tr>
              <td>{item.itemEN}</td>
              <td>{item.itemCN}</td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </table>
      )
    }
    )}
  </div>

export default ColdDish;
