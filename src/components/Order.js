import React from 'react'
import OrderDisplay from './OrderDisplay'
import Header from './Header';
import { useSelector } from 'react-redux';
import OrderDetails from './OrderDetails';
import OrderList from './OrderList';
import { Cmd } from './Cmd';
import { useParams } from 'react-router-dom';

const Order = () => {
  const   idOrder2  = useParams()
  console.log(idOrder2)

  const cmds2 = useSelector(state => state.data.orders)
  console.log(cmds2)

  // const cmds = useSelector(state => state.data.orders)
  const neworder = useSelector(state => state.data.orders.find(order => order.id == idOrder2.id))
  console.log(neworder)

  const arrNewOrd = [{neworder}]

  const CmdRender = arrNewOrd.map((item) => {
    return (
      <Cmd item={item}
      />
    )
})




  return (
    <div className='home'>
      <Header/>

      <div id="order">
        <div id="form">
            <label for="select">Sélectionner la commande à encaisser : </label>
              <select id="select" name="select">
                <option value="volvo">option</option>
              </select>
        </div>

        {CmdRender}


      {/* <div class="cmdDetail">
        <p id="detailtxt">Détail de la commande n°aàodada</p> */}
        {/* <OrderList/> */}
{/* 
          <div class ="encartItem">
            <div class="encartItemElement">
              <p>Nom de la Pizza</p>
              <p>(3x 7.9€)</p>
            </div>
            <p class="encartItemElement">23,7€</p>
          </div>
          <div id="cmdEnd">
            <div class="cmdEndElement Orders">
              <p>Soit un total de 45e</p>
            </div>
            <div class="cmdEndElement payOrder">
              <p>Encaisser la commande</p>
            </div>
          </div>
        </div> */}

      </div>


    </div>  )
}

export default Order