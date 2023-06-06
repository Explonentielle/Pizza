import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cards = ({text, details, img, classProp}) => {
    const navigate = useNavigate();
    const className = `${classProp} box`
  return (
    <div onClick={()=>navigate(`/${classProp}`, {state: {}})} className= {className} >
          <i>{img}</i>
          <hr/>
          <h2>{text}</h2>
          <p>{details}</p>
    </div>
  )
}

export default Cards
