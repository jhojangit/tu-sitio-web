import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Services from '../services/Services'
import Projects from '../projects/Projects'
import Presentation from '../presentation/Presentation'
import Contact from '../contact/Contact'


const Home = () => {
    return (
        <main className='home'>



            <section className='presentation__container'>
                <Presentation/>
            </section>

            <section className='contact__container'>
                <Contact/>
            </section>

            <section className='servicios__container'>
                <Services/>
            </section>

            <section className='projects__container'>
                <Projects/>
            </section>

{/* 
            {<Link to="/price"> asd </Link>}
 */}

        </main>

    )
}

export default Home