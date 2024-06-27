import React from 'react';
import './Projects.css';
import ToolBadge from './ToolBadge';
import Assets from '../../../assets/assets'


const projects = [
    { id: 1, title: 'DocMe', description: '1', img: Assets.images.DocMe, tool: [{ name: "ReactJS", icon: <Assets.icons.ReactJs /> }, { name: "ExpressJS" }, { name: "MySQL", icon: <Assets.icons.MySQL /> }], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/' },
    { id: 2, title: 'API Residencias', description: '2', img: Assets.images.ApiResidencias, tool: [{ name: 'PHP', icon: <Assets.icons.PHP /> }], Git: 'https://github.com/KevinJp21/ApiResidencia', demo: '' },
    { id: 3, title: 'API Ordenes', description: '3', img: Assets.images.ApiOrdenes, tool: [{ name: "JavaScript", icon: <Assets.icons.JavaScript /> }, { name: "ExpressJS" }], Git: 'https://github.com/KevinJp21/API_Gestion_Orden', demo: '' },
    { id: 4, title: 'Aistente ChatBot', description: '4', img: Assets.images.DocMeChatbot, tool: [{ name: 'Python', icon: <Assets.icons.Python /> }, { name: 'Flask', icon: <Assets.icons.Flask /> }, { name: 'TensorFlow', icon: <Assets.icons.TensorFlow /> }, { name: 'SQLAlchemy', icon: <Assets.icons.SQLA /> }, { name: "MySQL", icon: <Assets.icons.MySQL /> }], Git: 'https://github.com/KevinJp21/ChatBot', demo: '' },
    { id: 5, title: 'RestauranteSCocina', description: '5', img: Assets.images.RestauranteSCocina, tool: [{ name: "ReactJS", icon: <Assets.icons.ReactJs /> }, { name: 'PHP', icon: <Assets.icons.PHP /> }, { name: "MySQL", icon: <Assets.icons.MySQL /> }], Git: 'https://github.com/KevinJp21/RestauranteSCocina-ReactJS', demo: 'https://restaurantescocina.netlify.app/' }
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
                        {project.img && <img decoding="async" fetchpriority="low" src={project.img} alt={project.title} loading='lazy'/>}

                        <div className="contentCard">
                            <div className="HeaderCard">
                                <a title='DemoProject' className="IconsCards" target="-blank" href={project.demo}><Assets.icons.LinkIcon width={"30px"} height={"30px"}/></a>
                            </div>
                            <div className="FooterCard">
                                <div className="TitleCard">
                                    <h3>{project.title}</h3>
                                    <ul className="ToolsWrapper">
                                        {project.tool && project.tool.map((tool, index) => (
                                            <ToolBadge key={index} icon={tool.icon} name={tool.name} className={tool.name} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="LinkProject">
                                    <a title='RepositoryGitHub' target="-blank" href={project.Git}>{<Assets.icons.GitIcon className="IconsCards" width={"30px"} height={"30px"} />}</a>
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
