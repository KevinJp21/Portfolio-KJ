import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
        <header>
            <nav className='NavBarHome'>
                <div className="containerNavHome">
                    <h1>Kevin Julio Pineda</h1>
                    <div className={`navHome ${menuOpen ? 'NavHomeOpen' : ''}`}>
                        <ul className="menuHome">
                            <li><Link className="LinkNavHome Start" to="/#"><span className='linkText'>Inicio</span></Link></li>
                            <li><Link className="LinkNavHome About" to="/#"><span className='linkText'>Sobre mi</span></Link></li>
                            <li><Link className="LinkNavHome Projects" to="/#"><span className='linkText'>Proyectos</span></Link></li>
                            <li><Link className="LinkNavHome Contact" to="/login"><span className='linkText'>Contacto</span></Link></li>
                        </ul>
                    </div>
                    <div className={`hamburger ${menuOpen ? 'NavHomeOpen' : ''}`} onClick={toggleMenu}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                    </div>
                </div>
            </nav>
        </header>
  );
};

export default Navbar