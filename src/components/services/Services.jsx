import React from 'react'
import './services.css'



const Services = () => {
  return (
    <section className='services'>
      <h2 className='animate__fadeInLeft services__title'>Nuestros servicios</h2>

      <ul className='services__list'>
        <li className='services__item '>
          <i className='bx bx-shape-square bx-lg bx-tada-hover'></i>
          Diseño Personalizado
        </li>

        <li className='services__item '>
          <i className='bx bx-line-chart bx-lg bx-tada-hover'></i>
          Marketing digital
        </li>


        <li className='services__item '>
          <i className='bx bxs-food-menu bx-lg bx-tada-hover'></i>
          Gestión de contenido
        </li>


        <li className='services__item '>
          <i className='bx bx-window-open bx-lg bx-tada-hover'></i>
          Servicio de hosting
        </li>


        <li className='services__item '>
          <i className='bx bxs-envelope bx-lg bx-tada-hover' ></i>
          Correo corporativo
        </li>

      </ul>
    </section>
  )
}

export default Services