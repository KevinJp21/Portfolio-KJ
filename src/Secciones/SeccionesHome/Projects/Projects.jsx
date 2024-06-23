import React from 'react';
import './Projects.css';
import DocMe from '../../../assets/Images/DocMe.png';
import RestauranteSCocina from '../../../assets/Images/RestauranteSCocina.png'
import ApiResidencias from '../../../assets/Images/ApiResidencias.png'
import ApiOrdenes from '../../../assets/Images/ApiOrdenes.png'
import DocMeChatbot from '../../../assets/Images/DocMe Chatbot.png'
import { ReactComponent as LinkIcon } from '../../../assets/Icons/LinkIcon.svg';
import { ReactComponent as GitIcon } from '../../../assets/Icons/GitHub.svg';

const projects = [
    { id: 1, title: 'DocMe', description: '1', img: DocMe, tool: ['React JS', 'Express JS', 'MySQL'], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/' },
    { id: 2, title: 'API Residencias', description: '2', img: ApiResidencias, tool: ['PHP'], Git: 'https://github.com/KevinJp21/ApiResidencia', demo: ''},
    { id: 3, title: 'API Ordenes', description: '3', img: ApiOrdenes, tool: ['Express JS'], Git: 'https://github.com/KevinJp21/API_Gestion_Orden', demo: ''},
    { id: 4, title: 'Aistente ChatBot', description: '3', img: DocMeChatbot, tool: ['Python', 'Flask', 'TensorFlow', 'SQLAlchemy', 'NLTK', 'MySQL'], Git: 'https://github.com/KevinJp21/ChatBot', demo: ''},
    { id: 5, title: 'RestauranteSCocina', description: '5', img: RestauranteSCocina, tool: ['React JS', 'PHP', 'MySQL'], Git: 'https://github.com/KevinJp21/RestauranteSCocina-ReactJS', demo: 'https://restaurantescocina.netlify.app/' }
];

const Projects = () => {
    return (
        <section className="ContainerProjects" id='projects'>
            <div className="HeaderProjects">
                <h2>Proyectos</h2>
            </div>
            <div className="ContentProjects">
                {projects.map((project) => (
                    <div key={project.id} className={`CardProject Card${project.id}`}>
                        {project.img && <img src={project.img} alt={project.title} />}

                        <div className="contentCard">
                            <div className="HeaderCard">
                                <a target="-blank" href={project.demo}><LinkIcon className="IconsCards" width={"30px"} height={"30px"} /></a>
                            </div>
                            <div className="FooterCard">
                                <div className="TitleCard">
                                    <h3>{project.title}</h3>
                                    <div className="ToolsWrapper">
                                        {project.tool && project.tool.map((tool, index) => (
                                            <div className="ToolsCard" key={index}><span>{tool}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="LinkProject">
                                    <a target="-blank" href={project.Git}>{<GitIcon className="IconsCards" width={"30px"} height={"30px"} />}</a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
