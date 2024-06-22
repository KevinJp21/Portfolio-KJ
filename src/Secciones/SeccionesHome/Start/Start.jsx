import React from 'react'
import './Start.css'
import imgProfile from '../../../assets/Images/KevinJP.webp'
import CVKevin from '../../../assets/Docs/Kevin Julio CV.pdf'
import {ReactComponent as IconGitHub} from '../../../assets/Icons/GitHub.svg'
import {ReactComponent as IconLinkedin} from '../../../assets/Icons/Linkedin.svg'
const Start = () => {

    const handleDownloadCV = () =>{
        window.open(CVKevin);
    }

    return (
        <section className="ContainerStart">
            <div className="StartContent">
                <div className="ImgContent">
                    <img src={imgProfile} alt="Foto de perfil" width={"480px"} height={"480px"} />
                </div>

                <div className="StartTextContent">
                    <h2>Kevin Julio Pineda</h2>
                    <h3>Desarrollador Frontend</h3>
                    <div className="BTNProfileWrapper">
                        <button className='CVBtn' onClick={handleDownloadCV}><span>Descargar CV</span></button>
                        <button><span>Contactame</span></button>
                    </div>
                    <div className="BTNLinkSocialr">
                        <a className='LinkSocials' href='https://github.com/KevinJp21' target="_blank"><IconGitHub className="iconSocials" width="30px" height="30px"/></a>
                        <a className='LinkSocials' href='https://www.linkedin.com/in/kevin-julio-667280240/' target="_blank"><IconLinkedin  className="iconSocials" width="30px" height="30px"/></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Start