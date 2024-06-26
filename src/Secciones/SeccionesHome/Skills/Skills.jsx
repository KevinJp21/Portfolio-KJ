import React from 'react'
import './Skills.css'
import Assets from '../../../assets/assets'
import { Tools, IA, Others } from './Tools'

const Skills = () => {

    const Tool = [{ id: 1, name: 'Java', Logo: Assets.Logos.Java_Logo },
    { id: 2, name: 'JavaScript', Logo: Assets.Logos.JavaScript_Logo },
    { id: 3, name: 'PHP', Logo: Assets.Logos.PHP_Logo },
    { id: 4, name: 'TypeScript', Logo: Assets.Logos.TypeScript_Logo },
    { id: 5, name: 'React', Logo: Assets.Logos.ReactJS_Logo },
    { id: 6, name: 'Angular', Logo: Assets.Logos.Angular_Logo },
    { id: 7, name: 'HTML', Logo: Assets.Logos.HTML_Logo },
    { id: 8, name: 'CSS', Logo: Assets.Logos.CSS_Logo },
    { id: 9, name: 'ExpressJS', Logo: Assets.Logos.ExpressJS_Logo },
    { id: 10, name: 'jQuery', Logo: Assets.Logos.jQuery_Logo },
    { id: 11, name: 'NodeJS', Logo: Assets.Logos.NodeJS_Logo },
    { id: 12, name: 'MySQL', Logo: Assets.Logos.MySQL_Logo },
    { id: 13, name: 'Vite', Logo: Assets.Logos.Vite_Logo },];

    const ToolIA = [{ id: 1, name: 'Python', Logo: Assets.Logos.Python_Logo },
    { id: 2, name: 'TensorFlow', Logo: Assets.Logos.TensorFlow_Logo },
    { id: 3, name: 'Keras', Logo: Assets.Logos.Keras_Logo },
    { id: 4, name: 'NLTK', Logo: Assets.Logos.NLTK_Logo },
    { id: 5, name: 'SQLAlchemy', Logo: Assets.Logos.SQLA_Logo },
    { id: 6, name: 'Flask', Logo: Assets.Logos.Flask_Logo },
    { id: 7, name: 'SciKitLearn', Logo: Assets.Logos.SciKitLearn_Logo },
    { id: 8, name: 'Matplotlib', Logo: Assets.Logos.Matplotlib_Logo },
    { id: 9, name: 'Seaborn', Logo: Assets.Logos.Seaborn_Logo },
    { id: 10, name: 'Pandas', Logo: Assets.Logos.Pandas_Logo },
    { id: 11, name: 'NumPy', Logo: Assets.Logos.Numpy_Logo }
    ];

    const OthersTools = [{ id: 1, name: 'npm', Logo: Assets.Logos.npm_Logo},
        { id: 2, name: 'pnpm', Logo: Assets.Logos.pnpm_Logo},
        { id: 3, name: 'Git', Logo: Assets.Logos.Git_Logo}
    ]

    return (
        <section className="ContainerSkills" id="Skills">
            <div className="HeaderSkills">
                <h2>Habilidades</h2>
            </div>
            <h3 className='toolCategory'>Lenguajes y Herramientas</h3>
            <div className="ContentSkills">
                {Tool.map((Tool) => (
                    <Tools key={Tool.id} Logo={Tool.Logo} name={Tool.name} className={`cardsSkills`} />
                ))}
            </div>

            <h3 className='toolCategory'>Inteligencia Artificial y Ciencia de Datos</h3>
            <div className="ContentSkills">
                {ToolIA.map((Tool) => (
                    <IA key={Tool.id} Logo={Tool.Logo} name={Tool.name} className={`cardsSkills`} />
                ))}
            </div>

            <h3 className='toolCategory'>Otros</h3>
            <div className="ContentSkills">
                {OthersTools.map((Tool) => (
                    <IA key={Tool.id} Logo={Tool.Logo} name={Tool.name} className={`cardsSkills`} />
                ))}
            </div>
        </section>

    )
}

export default Skills