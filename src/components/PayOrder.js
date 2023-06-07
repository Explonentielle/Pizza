import React from 'react'
import Header from './Header'
import { Col, Row } from 'antd';
import OrderLine from './OrderLine';

const PayOrder = () => {
  return (
    <div className='home'>
      <Header/>

      <div id="payorder">
        <h1>Liste des commandes</h1>
        
        <div id="listCommands">
          <Row>
            <Col span={6}>
              
              N°
              
            </Col>
            <Col span={6}>
              
              Total Commande
            
            </Col>
            <Col span={6}>
              
              Statut Commande
            
            </Col>
            <Col span={6}>
              
              Actions
            
            </Col>
          </Row>
          <hr></hr>
        <OrderLine/>
        <OrderLine/>

        </div>
      </div>


    </div>  )
}

export default PayOrder