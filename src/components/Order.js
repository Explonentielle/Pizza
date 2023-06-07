import React from 'react'
import OrderDisplay from './OrderDisplay'
import Header from './Header';
import { useSelector } from 'react-redux';
import { Commande } from './Commande';

const Order = () => {

  const cmds = useSelector(state => state.data.orders)


  const RenderItems = () => {


    const listItems = cmds.map((item) => {
      return (
        <Commande
          key={item.id}
          item={item}
        />
      );
    });

    return (
      <div className="todos">
        <h2>Mes Pizzas</h2>
        {listItems}
      </div >
    );
  }

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


      <div class="cmdDetail">
        <p id="detailtxt">Détail de la commande n°aàodada</p>
        {RenderItems}
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
        </div>

      </div>


    </div>  )
}

export default Order