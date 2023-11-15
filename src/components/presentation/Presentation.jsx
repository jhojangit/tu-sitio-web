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

            <h1 className='presentation__title'>TU SITIO WEB</h1>
            <p className='presentation__phrase'>{presentationPhrase}</p>
        </div>
    )
}

export default Presentation