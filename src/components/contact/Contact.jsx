import React from 'react'
import './contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const Contact = () => {



  return (
    <Form className='contact'>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label'>Nombre</Form.Label>
        <Form.Control type="text"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label'>Correo electrónico</Form.Label>
        <Form.Control type="email"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='contact__label'>Celular</Form.Label>
        <Form.Control type="number" placeholder='¿Quieres que te contactemos?' onkeydown="return false" onwheel="return false" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='contact__label'>Tu mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Puedes incluir ejemplos para darte un precio aproximado' required />
      </Form.Group>


      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default Contact