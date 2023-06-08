import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';




export const Cmd = ({ item }) => {



const cmds = useSelector(state => state.data.orders)
const index = 0//cmds.indexOf(item);


    return (
                    <div>
                        {/* {console.log(cmds[index].id)} */}

      <OrderDetails
            key={cmds[index].id}
            id= {cmds[index].id}
          />
        </div>
    )
}



export default Cmd