import React from 'react'
import './contact.css'





const Contact = () => {



  //netlify-honeypot="bot-field"



  return (
    
    <form name="contact" netlify >

      <label>
        Name: 
        <input type="text" name="name" id="name" />
      </label>


      <button type="submit"> Enviar </button>

    </form>

  )
}

export default Contact