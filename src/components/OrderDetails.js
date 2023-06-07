import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';



const OrderDetails = ({id}) => {
  const order = useSelector(state => state.data.orders.find(order => order.id === id));
  console.log(order);

  const orderRender = order.pizzas.map((item) => {
    return (
      <OrderItem
        name={item.name} price={item.price}
      />
    )
})


  return (
    <div>
      <div>{id}</div>
      {orderRender}
    </div>

  )
}

export default OrderDetails