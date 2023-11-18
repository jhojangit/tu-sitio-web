import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Services from '../services/Services'
import Projects from '../projects/Projects'
import Presentation from '../presentation/Presentation'
import Contact from '../contact/Contact'
import Whatsapp from '../whatsapp/Whatsapp'
import Button from '../button/Button'


const Home = () => {
    return (
        <main className='home'>



            <section className='presentation__container'>
                <Presentation/>
            </section>

            <section className='contact__container'>
                <Contact/>
            </section>

            <section className='btn__container'>
                <Button/>
            </section>

            <section className='servicios__container'>
                <Services/>
            </section>

            <section className='projects__container'>
                <Projects/>
            </section>

            <section className='whatsapp__container'>
                <Whatsapp/>
            </section>


            {<Link to="/prices"> assssssssssssssss </Link>}


        </main>

    )
}

export default Home