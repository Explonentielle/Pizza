import React from 'react'

const OrderItem = ({name, price, quantite}) => {
  return (
    <div className='cont'>
        <div className='detailsCont'>
          <p>{name}</p>
          <p>({quantite} x {price})</p>
        </div>
        <p>{Math.round(price*quantite * 100) / 100}</p>
    </div>
  )
}

export default OrderItem