import { useParams } from 'react-router-dom';
import choiceList from './Menus';
import Pizza from './Pizza';
import OrderDetails from './OrderDetails';
import Header from './Header';



const NewOrder = () => {
  const   idOrder  = useParams()
  const pizzaRender = choiceList.map((item) => {
      return (
        <Pizza key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
      )
  })

  return (
    <div className='home'>
      <Header/>

      <div className='ordersContainer'>
        <div className='pizzaRenderContainer'>
          {pizzaRender}
        </div>
        <div className='myOrder'>
          <OrderDetails
            key={idOrder.id}
            id= {idOrder.id}
          />
        </div>
      </div>
    </div>
  )
}

export default NewOrder