import React from 'react'

const OrderItem = ({name, price, quantite, id}) => {
  return (
    <div class="cmdDetail">

      <div class ="encartItem">
                  <div class="encartItemElement">
          <p>{name}</p>
          <p>({quantite} x {price})</p>
          </div>
                  <p class="encartItemElement">{Math.round(price*quantite * 100) / 100}€</p>
                </div>
    </div>
    
  )
}

export default OrderItem