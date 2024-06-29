import React from 'react'
import './About.css'
import VideoChatBot from '../../../assets/Animations/DocMe Chatbot.mp4'

//Translation
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section className='ContainerAbout' id='About'>
            <div className="HeaderAbout">
                <h2>{t('About.title')}</h2>
            </div>

            <div className="ContentAbout">
                <div className="DescriptionAbout">
                    <p dangerouslySetInnerHTML={{ __html: t('About.p1.0') }}></p>
                    <p dangerouslySetInnerHTML={{ __html: t('About.p2.0') }}></p>
                    <p dangerouslySetInnerHTML={{ __html: t('About.p3.0') }}></p>
                </div>
            </div>
        </section>
    )
}

export default About