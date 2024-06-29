import React from 'react'
import './Footer.css'
import { ReactComponent as IconGitHub } from '../../assets/Icons/GitHub.svg'
import { ReactComponent as IconLinkedin } from '../../assets/Icons/Linkedin.svg'
import {ReactComponent as ContactIcon} from '../../assets/Icons/IconContact.svg'
const Footer = () => {
    return (
        <footer>
            <div className="ContentFooter">
                <span>Hecho por KevinJp21</span>
                <ul className='FooterList'>
                    <li><a title='GitHub' className='LinkFooter LinkSocials' href='https://github.com/KevinJp21' target="_blank"><IconGitHub className="FTiconSocials" width="30px" height="30px"/></a></li>
                    <li><a title='Linkedin' className='LinkFooter LinkSocials' href='https://www.linkedin.com/in/kevin-julio-667280240/' target="_blank"><IconLinkedin  className="FTiconSocials" width="30px" height="30px"/></a></li>
                    <li><a title='Contacto' className="LinkFooter Contact" href="mailto: kevinjp821@gmail.com" aria-label="Contact"><ContactIcon className="FTiconSocials" width={"30px"} heigh={"30px"} /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer