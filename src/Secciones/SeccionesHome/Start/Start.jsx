import React from 'react'
import './Start.css'
import imgProfile from '../../../assets/Images/KevinJP.webp'
import CVKevin from '../../../assets/Docs/Kevin Julio CV.pdf'
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
                </div>
            </div>

        </section>
    )
}

export default Start