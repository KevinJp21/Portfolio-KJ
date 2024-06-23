import React from 'react';
import './Projects.css';
import DocMe from '../../../assets/Images/DocMe.png';
import { ReactComponent as LinkIcon } from '../../../assets/Icons/LinkIcon.svg';
import { ReactComponent as GitIcon } from '../../../assets/Icons/GitHub.svg';

const projects = [
    { id: 1, title: 'DocMe', description: '1', img: DocMe, tool: ['React JS', 'Express JS', 'SQL'], Git: 'https://github.com/KevinJp21/DocMe_ReactJS', demo: 'https://docme-two.vercel.app/' },
    { id: 2, title: '', description: '2' },
    { id: 3, title: '', description: '3' },
    { id: 4, title: '', description: '4' },
    { id: 5, title: '', description: '5' }
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
