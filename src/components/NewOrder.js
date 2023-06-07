import { useNavigate } from 'react-router-dom';
import choiceList from './Menus';
import Pizza from './Pizza';
import { useDispatch } from 'react-redux';
import { compress } from '../slices';
import Header from './Header';



const NewOrder = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const CompressPizzas = () => {
  //   dispatch(compress());
  // }

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
          <p>order</p>
        </div>
        <button
        // onClick={() => CompressPizzas()}
        >
          valider
        </button>
      </div>
    </div>
  )
}

export default NewOrder