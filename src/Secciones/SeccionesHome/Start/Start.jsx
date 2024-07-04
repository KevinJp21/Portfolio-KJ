import React from 'react'
import './Start.css'
import imgProfile from '../../../assets/Images/KevinJP.avif'

//Iconos
import { ReactComponent as IconGitHub } from '../../../assets/Icons/GitHub.svg';
import { ReactComponent as IconLinkedin } from '../../../assets/Icons/Linkedin.svg';

//Translation

import { useTranslation } from 'react-i18next';

//Docs
import CVKevin from '../../../assets/Docs/Kevin Julio CV.pdf'

const Start = () => {
    const { t } = useTranslation();
    const handleDownloadCV = () =>{
        window.open(CVKevin);
    }


    return (
        <section className="ContainerStart" id='Start'>
            <div className="StartContent">
                <div className="ImgContent">
                    <img src={imgProfile} alt="Foto de kevin julio pineda" width={"300px"} height={"300px"} fetchpriority="high"/>
                </div>

                <div className="StartTextContent">
                    <h2>{t('Home.name')}</h2>
                    <p><strong>{t('Home.descStrong')}</strong>{t('Home.description')}</p>
                    <div className="BTNProfileWrapper">
                        <button className='CVBtn' onClick={handleDownloadCV}><span>{t('Home.btnCV')}</span></button>

                        <button><a href="mailto: kevinjp821@gmail.com"><span>{t('Home.btnContact')}</span></a></button>
                    </div>
                    <div className="BTNLinkSocialr">
                        <a title='GitHub' className='LinkSocials' href='https://github.com/KevinJp21' target="_blank"><IconGitHub className="iconSocials" width="30px" height="30px"/></a>
                        <a title='Linkedin' className='LinkSocials' href='https://www.linkedin.com/in/kevin-julio-667280240/' target="_blank"><IconLinkedin  className="iconSocials" width="30px" height="30px"/></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Start