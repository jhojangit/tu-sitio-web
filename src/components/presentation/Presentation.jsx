import React from 'react'
import './presentation.css'
import './presentation.css'
import logo1 from '../../../public/logo1.png'
import {presentationPhrase} from '../../constants/constants'





const Presentation = () => {

    return (
        <div className='presentation'>

            <section className='presentation__img--logo'>
                <img src={logo1} alt="Logo" />
            </section>

            <h1 className='presentation__title'>
                <span className='presentation__title--span'>T</span>
                <span className='presentation__title--span'>U</span>
                <span className='presentation__title--span'> </span>
                <span className='presentation__title--span'>S</span>
                <span className='presentation__title--span'>I</span>
                <span className='presentation__title--span'>T</span>
                <span className='presentation__title--span'>I</span>
                <span className='presentation__title--span'>O</span>
                <span className='presentation__title--span'> </span>
                <span className='presentation__title--span'>W</span>
                <span className='presentation__title--span'>E</span>
                <span className='presentation__title--span'>B</span>
            </h1>
            <p className='presentation__phrase'>Creamos páginas web a la medida de tus necesidades y objetivos. Nuestros diseños son 

            <span className='presentation__span'> 100% </span>

            personalizados y efectivos, adaptados a la imágen de tu marca y enfocados en brindar una experiencia de usuario óptima.</p>
        </div>
    )
}

export default Presentation