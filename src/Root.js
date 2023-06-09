import React from 'react'
import App from './App'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NotFound from './components/NotFound'
import NewOrder from './components/NewOrder'
import PayOrder from './components/PayOrder'
import Order from './components/Order'


const Root = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/newOrder/:id" element={<NewOrder/>}/>
      <Route exact path="/payOrder" element={<PayOrder/>}/>
      <Route exact path="/Order/" element={<Order/>}/>
      <Route exact path="/Orders/:id" element={<Order/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Root