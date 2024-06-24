import React from 'react'
import './FloatNavbar.css'
import { Link } from 'react-router-dom'
import { ReactComponent as HomeIcon } from '../../assets/Icons/Home.svg'
import { ReactComponent as AboutIcon } from '../../assets/Icons/IconAbout.svg'
import { ReactComponent as ProjectIcon } from '../../assets/Icons/IconProject.svg'
import { ReactComponent as ContactIcon } from '../../assets/Icons/IconContact.svg'
const FloatNavbar = () => {
  return (
    <header className='FloatNavbar'>
    <nav className='FloatNavBarHome'>
        <div className="containerFloatNavHome">
            <div className="FloatnavHome">
                <ul className="FloatmenuHome">
                    <li><a className="LinkFloatNavHome Start" href='#Start'><HomeIcon className="home-icon" width={"30px"} heigh={"30px"}/></a></li>
                    <li><a className="LinkFloatNavHome About" href='#About'><AboutIcon className="home-icon" width={"30px"} heigh={"30px"}/></a></li>
                    <li><a className="LinkFloatNavHome Projects" href="#projects"><ProjectIcon className="home-icon" width={"30px"} heigh={"30px"}/></a></li>
                    <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com"><ContactIcon className="home-icon" width={"30px"} heigh={"30px"}/></a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default FloatNavbar