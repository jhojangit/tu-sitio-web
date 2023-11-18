import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom'


const Button = () => {


    const navigate = useNavigate()

    const handleMain = () => {
      navigate("/prices")
    }


  return (
    
    <button onClick={handleMain} className='prices__btn--main'>Revisa nuestra lista de precios</button>
    
  )
}

export default Button