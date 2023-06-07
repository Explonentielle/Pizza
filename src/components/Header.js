import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";

const Header = () => {
    const navigate = useNavigate();
  
  
    return (
        <header className='header'>
          <BsArrowLeftShort onClick={() => navigate("/")}/>
          <i>🍕</i>
          <h1>Pizza Reeflex</h1>
        </header>
  )}
  
  export default Header