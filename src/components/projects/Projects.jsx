import React from 'react'
import './projects.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemon from '../../../public/pokemon.png'
import anclado from '../../../public/anclado.png'
import rick from '../../../public/rick.png'
import reminders from '../../../public/reminders.png'





const Projects = () => {


	return (
		<section className='projects'>

			<h2 className='projects__title'>Observa algunos de nuestros proyectos</h2>


			<Carousel data-bs-theme="dark" className='projects__carousel' fade="true" >

				<Carousel.Item  className='projects__carousel--item' >
					<img 
						className="d-block w-100 projects__carousel--img"
						src={pokemon}
						alt="First slide"
					/>
				</Carousel.Item>


				<Carousel.Item className='projects__carousel--item'>
					<img
						className="d-block w-100 projects__carousel--img"
						src={anclado}
						alt="First slide"
					/>
				</Carousel.Item>



				<Carousel.Item className='projects__carousel--item'>
					<img
						className="d-block w-100 projects__carousel--img"
						src={rick}
						alt="First slide"
					/>
				</Carousel.Item>



				<Carousel.Item className='projects__carousel--item'>
					<img
						className="d-block w-100 projects__carousel--img"
						src={reminders}
						alt="First slide"
					/>
				</Carousel.Item>



			</Carousel>
		</section>
	);

}

export default Projects