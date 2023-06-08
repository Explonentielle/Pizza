import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import OrderDetails from './OrderDetails';




export const Cmd = ({ item }) => {
    const   idOrder2  = useParams()
    console.log(idOrder2)
  
    const cmds3 = useSelector(state => state.data.orders.find(order => order.id == idOrder2.id))
    console.log(cmds3)


const cmds = useSelector(state => state.data.orders)
const index = 0//cmds.indexOf(item);


    return (
                    <div>
                        {/* {console.log(cmds[index].id)} */}

      <OrderDetails
            key={cmds3.id}
            id= {cmds3.id}
          />
        </div>
    )
}



export default Cmd