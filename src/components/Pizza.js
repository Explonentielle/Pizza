import { add } from '../slices';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'



const Pizza = ({ name, img, price, id }) => {
  const dispatch = useDispatch();
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