import React from 'react'
import './Start.css'
import Assets from '../../../assets/assets'

const Start = () => {

    const handleDownloadCV = () =>{
        window.open(Assets.Docs.CVKevin);
    }

    return (
        <section className="ContainerStart" id='Start'>
            <div className="StartContent">
                <div className="ImgContent">
                    <img loading="eager" src={Assets.images.imgProfile} alt="Foto de perfil" width={"300px"} height={"400px"}/>
                </div>

                <div className="StartTextContent">
                    <h2>Hey, Soy Kevin Julio</h2>
                    <p><strong>Ingeniero de Sistemas enfocado en el Desarrollo Frontend</strong>. de Colombia co. Especializado en el desarrollo de aplicaciones web</p>
                    <div className="BTNProfileWrapper">
                        <button className='CVBtn' onClick={handleDownloadCV}><span>Descargar CV</span></button>

                        <button><a href="mailto: kevinjp821@gmail.com"><span>Contactame</span></a></button>
                    </div>
                    <div className="BTNLinkSocialr">
                        <a title='GitHub' className='LinkSocials' href='https://github.com/KevinJp21' target="_blank"><Assets.icons.IconGitHub className="iconSocials" width="30px" height="30px"/></a>
                        <a title='Linkedin' className='LinkSocials' href='https://www.linkedin.com/in/kevin-julio-667280240/' target="_blank"><Assets.icons.IconLinkedin  className="iconSocials" width="30px" height="30px"/></a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Start