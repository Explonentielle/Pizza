import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../slices';

const Cards = ({text, details, img, classProp}) => {
    const navigate = useNavigate();
    const className = `${classProp} box`
    const dispatch = useDispatch();
    const orderId = `CMD-${Date.now()}`
  
    const creatOrder = (item) => {
      if (item === "newOrder" ) {
        dispatch(createOrder(orderId));
    }
      nav(item)
  }

    const nav = (item) => {
      if (item === "newOrder" ) {
        navigate(`/${classProp}/${orderId}`)
      }
      else {
        navigate(`/${classProp}`)
      }
    }
   
  return (
    <div onClick={() => creatOrder(classProp)} className={className}>
      <i>{img}</i>
      <hr />
      <h2>{text}</h2>
      <p>{details}</p>
    </div>
  )
}


export default Cards
