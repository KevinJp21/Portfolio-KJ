import React from 'react'
import './FloatNavbar.css'
import { Link } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '../../assets/Icons/Home.svg'
const FloatNavbar = () => {
  return (
    <header className='FloatNavbar'>
    <nav className='FloatNavBarHome'>
        <div className="containerFloatNavHome">
            <div className="FloatnavHome">
                <ul className="FloatmenuHome">
                    <li><Link className="LinkFloatNavHome Start" to="/#"><HomeIcon className="home-icon" width={"30px"} heigh={"30px"}/></Link></li>
                    <li><a className="LinkFloatNavHome About" href='#About'><span className='linkText'>Sobre mi</span></a></li>
                    <li><Link className="LinkFloatNavHome Projects" to="/#"><span className='linkText'>Proyectos</span></Link></li>
                    <li><Link className="LinkFloatNavHome Contact" to="/login"><span className='linkText'>Contacto</span></Link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default FloatNavbar