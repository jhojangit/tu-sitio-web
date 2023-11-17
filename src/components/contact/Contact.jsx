import React from 'react'
import './contact.css'





const Contact = () => {



  return (

    <form name="contact" method="post" className='contact'>
      <strong className='contact__title'>¡Creemos tu sitio web DE INMEDIATO!</strong>
      <input type="hidden" name="form-name" value="contact" />

      <div className='contact__element'>
        <label className='contact__label'>
          Tu nombre:
          <input className='contact__input' 
            type="text" 
            name="name" 
            required 
          />
        </label>
      </div>


      <div className='contact__element'>
        <label className='contact__label'>
          Email:
          <input className='contact__input' 
            type="email" 
            name="email" 
            required 
          />
        </label>
      </div>

      <div className='contact__element'>
        <label className='contact__label'>
          Número de contacto:
          <input className='contact__input' 
            type="number" 
            name="phone" 
          />
        </label>
      </div>

      <div className='contact__element'>
        <label className='contact__label'>
          Mensaje:
          <textarea className='contact__input contact__textarea'
            name="message"
            required
            placeholder='Puedes incluir ejemplos para brindarte mejor información'>
          </textarea>
        </label>
      </div>

      <div className='contact__element'>
        <button className='contact__send' type="submit">Enviar</button>
      </div>

    </form>
  )
}

export default Contact