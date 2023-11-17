import React from 'react'
import './projects.css'
import Slider from '../slider/Slider'
import pokemon from '../../../public/pokemon.png'
import anclado from '../../../public/anclado.png'
import rick from '../../../public/rick.png'
import reminders from '../../../public/reminders.png'





const Projects = () => {

	const images = [
		{
			id: 0,
			img: pokemon,
			name:"pokemon",
			url: "https://poke-jhojan.netlify.app/#/"
		},
		{
			id: 1,
			img: anclado,
			name:"anclado",
			url: "https://anclado-colombia.netlify.app/"
		},
		{
			id: 2,
			img: rick,
			name:"rick",
			url: "https://rickmortysearchplaces.netlify.app/"
		},
		{
			id: 3,
			img: reminders,
			name:"reminders",
			url: "https://remindersjhojan.netlify.app/"
		}
	]


	return (
		<section className='projects'>

			<h2 className='projects__title'>Observa algunos de nuestros proyectos</h2>

			<Slider images={images}/>

		</section>
	);

}

export default Projects