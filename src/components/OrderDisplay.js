import React from 'react'



const OrderDisplay = ({ items, total }) => {

    const OrderItems = items.map(item => {
        return (
            <div key={item.id}>{item.name} - {item.price}€</div>
        )
    });


  return (
    <div>
      {OrderItems}
      <div>Soit un total de {total}€</div>




    </div>
  )
}



export default OrderDisplay