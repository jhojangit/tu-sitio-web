import React from 'react'
import './prices.css'
import prices from '../../json/prices.json/'
import Whatsapp from '../../components/whatsapp/Whatsapp'
import { useNavigate } from 'react-router-dom'



const Prices = () => {

  const navigate = useNavigate()

  const handleMain = () => {
    navigate("/")
  }


  return (


    <main className='prices__page'>

      <button onClick={handleMain} className='prices__btn'>Ir a la página principal</button>


      <h2 className='prices__title'>Lista de precios</h2>

      <h4 className='prices__subtitle'>TU SITIO WEB</h4>

      <p className='prices__phrase'>Todos los precios acontinuación son aproximados. Y dependen de las características particulares del proyecto</p>



      <section className="prices__card--container">
      {
        prices.map(data => (
          <section className="prices__card" key={data.id}>
            <p className='prices__name'>{data.name}</p>

            <p className='prices__price'>
                {data.price.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0})}
            </p>




              <ul className='prices__ul'>
                {
                  data.url.map((path, index) => (
                    <li className='prices__li' 
                      key={path}>
                        <a className='prices__a' 
                          href={path} target="_blank" 
                          rel="noopener noreferrer">
                            Ejemplo {index + 1} 
                        </a>
                    </li>
                  ))

                }
              </ul>

          </section>
        ))
      }

      </section>

      <Whatsapp />


    </main>
  )
}

export default Prices