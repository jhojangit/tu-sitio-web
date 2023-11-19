import React from 'react'
import './whatsapp.css'
const Whatsapp = () => {


    return (
        <section className="whats">
            <a 
                className='whats__anchor'
                target="_blank"
                aria-label="Compra por WhatsApp"
                href="https://wa.me/573133028169?text= ¡Hola! Quisiera tener un sitio web">
                
                <i 
                    className='bx bxl-whatsapp bx-md bx-tada'>
                </i>
            </a>
        </section>
    )
}

export default Whatsapp