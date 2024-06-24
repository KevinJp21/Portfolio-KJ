import React from 'react'
import './About.css'
import VideoChatBot from '../../../assets/Animations/DocMe Chatbot.mp4'
const About = () => {
    return (
        <section className='ContainerAbout' id='About'>
            <div className="HeaderAbout">
                <h2>Sobre mi</h2>
            </div>

            <div className="ContentAbout">
                <div className="DescriptionAbout">
                    <p>
                        Me llamo <stron>Kevin Julio Pineda</stron> y soy <strong>ingeniero de sistemas</strong> enfocado en el <strong>desarrollo frontend</strong>. Durante mi formación universitaria, tuve la oportunidad de participar en diversas ferias tecnológicas, lo que me permitió ampliar mis conocimientos y habilidades en el campo de la ingeniería de sistemas.
                    </p>
                    <p>
                        A lo largo de mi carrera, <strong>he liderado</strong> múltiples proyectos desde el concepto inicial hasta su despliegue. Utilizo <strong>metodologías ágiles</strong> y <strong>patrones de diseño</strong> para asegurar que cada proyecto se complete de manera eficiente y cumpla con los estándares de calidad más altos.
                    </p>
                    <p>
                        Tengo experiencia en <strong>arquitectura de software</strong> y siempre busco implementar las mejores prácticas en mis proyectos. Mi objetivo es seguir creciendo profesionalmente y contribuir a la creación de soluciones tecnológicas innovadoras que mejoren la experiencia del usuario.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About