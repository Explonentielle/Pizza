import React from 'react'

const OrderItem = ({name, price}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
    </div>
  )
}

export default OrderItem