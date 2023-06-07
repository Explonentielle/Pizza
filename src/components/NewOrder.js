import { useNavigate, useParams } from 'react-router-dom';
import choiceList from './Menus';
import Pizza from './Pizza';
import OrderDetails from './OrderDetails';




const NewOrder = () => {
  const navigate = useNavigate();
  const   idOrder  = useParams()
  console.log(idOrder)
  const pizzaRender = choiceList.map((item) => {
      return (
        <Pizza key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
      )
  })

  return (
    <div className='home'>
      <header className='header'>
        <i onClick={() => {
          navigate('/')
        }}>🍕</i>
        <h1>Pizza Reeflex</h1>
      </header>
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