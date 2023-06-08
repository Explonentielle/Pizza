import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import { useDispatch } from 'react-redux';
import { modified } from '../slices';



const OrderDetails = ({ id }) => {
  const result = {};
  const order = useSelector(state => state.data.orders.find(order => order.id === id));
  const dispatch = useDispatch



  order.pizzas.forEach(pizza => {
    const key = `${pizza.id}-${pizza.name}-${pizza.price}`;
    if (result[key]) {
      result[key].quantite++;
    } else {
      result[key] = { ...pizza, quantite: 1 };
    }
  });


  const transformedPizzas = Object.values(result);


  const refreshStat = (pizza) => {
    dispatch(modified(pizza));
  }


  let total = 0
  transformedPizzas.forEach(pizza => {
    total += pizza.price * pizza.quantite
  })
  total = Math.round(total * 100) / 100;



  refreshStat()
  const orderRender = transformedPizzas.map((item) => {
    return (
      <OrderItem
        name={item.name} price={item.price} quantite={item.quantite} key={item.id} id={id}
      />
    )
  })
  return (
    <div>
      {/* <div>{id}</div> */}
      <p id="detailtxt">Détail de la commande n°{id}</p>

      {orderRender}
      <div id="cmdEnd">
            <div class="cmdEndElement Orders">
              <p>Soit un total de {total}€</p>
            </div>
            {/* <div class="cmdEndElement payOrder">
              <p>Encaisser la commande</p>
            </div> */}
          </div>
    </div>

  )
}


export default OrderDetails

