import React from 'react'
import './prices.css'
import {prices} from '../../json/prices/'

const Prices = () => {
  return (
    <main>
      

      <h2>Lista de precios</h2>

      <h4>Tu sitio web</h4>

      <p>Todos los precios acontinuación son aproximados. Y dependen de las características particulares del proyecto</p>

      {
        prices.map(data => (
          <section key={data.id}>

            <p>{data.price}</p>
            <p>{data.name}</p>


            <ul>
              {
                data.url.map((path, index) => (
                  <li key={path}>
                      <a href={path} target="_blank" rel="noopener noreferrer">enlace {index+1} </a>
                  </li>
                ))

              }
            </ul>

          </section>
        ))
      }

    
    
    
    </main>
  )
}

export default Prices