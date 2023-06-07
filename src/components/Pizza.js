import { add } from '../slices';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'



const Pizza = ({ name, img, price, id }) => {
  const dispatch = useDispatch();

//   const pizzatest = [
//     {
//         id: 11,
//         total: 7.90,
//         pizzas: [
//             {
//                 id: 1,
//                 name: "margarita",
//                 price: 7.90
//             },
//             {
//               id: 3,
//               name: "reine",
//               price: 8.90
//           }
//         ]
//     }
// ]

  const addToOrders = (pizza) => {
    dispatch(add(pizza));
  }


  return (
    <div id={name} onClick={() => addToOrders({ name, price, id })} className='pizzaContainer'>
      <img className='pizzaImg' src={img} alt="" />
      <div className='pizzaDetails'>
        <p className='pizzaName'>{name}</p>
        <p>{price}€</p>
      </div>
    </div>
  )
}

export default Pizza