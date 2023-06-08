import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';



const OrderDetails = ({id}) => {
  const result = {};
  const order = useSelector(state => state.data.orders.find(order => order.id === id));


  order.pizzas.forEach(pizza => {
    const key = `${pizza.id}-${pizza.name}-${pizza.price}`;
    if (result[key]) {
      result[key].quantite++;
    } else {
      result[key] = {...pizza, quantite: 1};
    }
  });
  const transformedPizzas = Object.values(result);

  let total = 0
  transformedPizzas.forEach(pizza => {
    total += pizza.price * pizza.quantite
  })
  total = Math.round(total * 100) / 100;


  const orderRender = transformedPizzas.map((item) => {
    return (
      <OrderItem
        name={item.name} price={item.price} quantite={item.quantite} key={item.id}
      />
    )
})


  return ( 
    <div>
      <div>{id}</div>
      {orderRender}
      <p>Sois un total de : {total} €</p>
    </div>

  )
}

export default OrderDetails

