import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { removed } from '../slices';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



export const OrderList = ({ item }) => {

let editLink = item.id ;
const navigate = useNavigate();
const dispatch = useDispatch();

const deleteTodo = (index) => {
    dispatch(removed(index))
  }

  const cmds = useSelector(state => state.data.orders)

const index = cmds.indexOf(item);


    return (
                    <div>
        <Row>
        <Col span={6}>
          
        <p>Commande n°{item.id}</p> 
          
        </Col>
        <Col span={6}>
          
        <p>{item.total}</p>
        
        </Col>
        <Col span={6}>
          
          <div className="statutcmd waiting"> En attente de paiement </div>
        
        </Col>
        <Col span={6}>
          
          <div class="divButtons">
          <button class="listButton" id="edit" onClick={() => navigate(`/Orders/${editLink}`)}>
            <FaEdit class="icon" />
          </button>

          <button class="listButton" id="delete" onClick={() => deleteTodo(index)}>
            <MdDelete />
          </button>
          </div>
        </Col>
      </Row>
            {console.log(item)}
        </div>
    )
}



export default OrderList