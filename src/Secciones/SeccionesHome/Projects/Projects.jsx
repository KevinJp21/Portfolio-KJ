import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ToolBadge from './ToolBadge';

//Imagenes
import DocMe from '../../../assets/Images/docme.webp';
import RestauranteSCocina from '../../../assets/Images/restaurantescocina.webp';
import ApiResidencias from '../../../assets/Images/ApiResidencias.webp';
import ApiOrdenes from '../../../assets/Images/ApiOrdenes.webp';
import DocMeChatbot from '../../../assets/Images/docme-chatbot.webp';

//Iconos
import { ReactComponent as LinkIcon } from '../../../assets/Icons/LinkIcon.svg';
import { ReactComponent as GitIcon } from '../../../assets/Icons/GitHub.svg';
import { ReactComponent as ReactJs } from '../../../assets/Icons/ReactJs.svg';
import { ReactComponent as MySQL } from '../../../assets/Icons/MySQL.svg';
import { ReactComponent as PHP } from '../../../assets/Icons/PHP.svg';
import { ReactComponent as JavaScript } from '../../../assets/Icons/JavaScript.svg';
import { ReactComponent as Python } from '../../../assets/Icons/Python.svg';
import { ReactComponent as Flask } from '../../../assets/Icons/Flask.svg';
import { ReactComponent as TensorFlow } from '../../../assets/Icons/Tensorflow.svg';
import { ReactComponent as SQLA } from '../../../assets/Icons/SQLAlchemy.svg';

//Translation

import { useTranslation } from 'react-i18next';





const Projects = () => {

    const { t } = useTranslation();

    const projects = [
        { id: 1, title: t('Projects.p1'), description: '1', img: DocMe, tool: [{ name: "ReactJS", icon: <ReactJs /> }, { name: "ExpressJS" }, { name: "MySQL", icon: <MySQL /> }], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/' },
        { id: 2, title: t('Projects.p2'), description: '2', img: ApiResidencias, tool: [{ name: 'PHP', icon: <PHP /> }], Git: 'https://github.com/KevinJp21/ApiResidencia', demo: '' },
        { id: 3, title: t('Projects.p3'), description: '3', img: ApiOrdenes, tool: [{ name: "JavaScript", icon: <JavaScript /> }, { name: "ExpressJS" }], Git: 'https://github.com/KevinJp21/API_Gestion_Orden', demo: '' },
        { id: 4, title: t('Projects.p4'), description: '4', img: DocMeChatbot, tool: [{ name: 'Python', icon: <Python /> }, { name: 'Flask', icon: <Flask /> }, { name: 'TensorFlow', icon: <TensorFlow /> }, { name: 'SQLAlchemy', icon: <SQLA /> }, { name: "MySQL", icon: <MySQL /> }], Git: 'https://github.com/KevinJp21/ChatBot', demo: '' },
        { id: 5, title: t('Projects.p5'), description: '5', img: RestauranteSCocina, tool: [{ name: "ReactJS", icon: <ReactJs /> }, { name: 'PHP', icon: <PHP /> }, { name: "MySQL", icon: <MySQL /> }], Git: 'https://github.com/KevinJp21/RestauranteSCocina-ReactJS', demo: 'https://restaurantescocina.netlify.app/' }
    ];

    return (
        <section className="ContainerProjects" id='Projects'>
            <div className="HeaderProjects">
                <h2>{t('Projects.title')}</h2>
            </div>
            <div className="ContentProjects">
                {projects.map((project) => (
                    <div key={project.id} className={`CardProject Card${project.id}`}>
                        {project.img && <img decoding="async" fetchpriority="low" src={project.img} alt={project.title} loading='lazy'/>}

                        <div className="contentCard">
                            <div className="HeaderCard">
                                <a title='DemoProject' className="IconsCards" target="-blank" href={project.demo}><LinkIcon width={"30px"} height={"30px"}/></a>
                            </div>
                            <div className="FooterCard">
                                <div className="TitleCard">
                                    <Link to={project.title}><h3>{project.title}</h3></Link>
                                    <ul className="ToolsWrapper">
                                        {project.tool && project.tool.map((tool, index) => (
                                            <ToolBadge key={index} icon={tool.icon} name={tool.name} className={tool.name} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="LinkProject">
                                    <a title='RepositoryGitHub' target="-blank" href={project.Git}>{<GitIcon className="IconsCards" width={"30px"} height={"30px"} />}</a>
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
