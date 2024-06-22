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
                    <p>¡Hola! Soy Kevin Julio, Ingeniero de Sistemas especializado en Desarrollo Frontend. Con experiencia en la mejora continua de procesos y gestión de proyectos dentro del desarrollo de software, me dedico a crear aplicaciones web escalables y funcionales.</p>
                    <p>Mi enfoque se centra en la arquitectura de soluciones web. Me enorgullece liderar proyectos desde la concepción hasta la entrega, asegurando resultados de alta calidad en cada etapa del ciclo de vida del desarrollo.</p>
                    <p>Aplico metodologías ágiles y patrones de diseño para garantizar que cada proyecto no solo cumpla con las expectativas del cliente, sino que también mejore la experiencia del usuario final. Estoy siempre en busca de nuevos desafíos y oportunidades para innovar y colaborar con equipos multidisciplinarios.</p>
                </div>
            </div>
        </section>
    )
}

export default About