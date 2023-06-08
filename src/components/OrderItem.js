import React from 'react'

const OrderItem = ({name, price}) => {
  return (
    <div class ="detailCmd">
      <div>
        <p>{name}</p>
        <p>? x {price}€</p>
      </div>
      <div>
        <p>{price}€</p>
      </div>
    </div>
  )
}

export default OrderItem