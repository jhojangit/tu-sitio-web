import React from 'react'
import './contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const Contact = () => {



  return (
    <Form className='contact' netlify netlify-honeypot="bot-field" >


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label' htmlFor='name' >Nombre</Form.Label>
        <Form.Control type="text" name='name' id='name' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label' htmlFor='email'>Correo electrónico</Form.Label>
        <Form.Control type="email" name='email' id='email'  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label' htmlFor='phone'>Celular</Form.Label>
        <Form.Control type="number" name='phone' id='phone' placeholder='¿Quieres que te contactemos?' onkeydown="return false" onwheel="return false" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='contact__label' htmlFor='message'>Tu mensaje</Form.Label>
        <Form.Control as="textarea" name='message' id='message' rows={3} placeholder='Puedes incluir ejemplos para darte un precio aproximado' required />
      </Form.Group>


      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default Contact