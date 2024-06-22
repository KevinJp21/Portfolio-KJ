import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        // Cambia el estado basado en la posición del scroll
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        // Evento para detectar scroll
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <header className={`NavBar${scroll ? ' scrolled' : ''}`}>
            <nav className='NavBarHome'>
                <div className="containerNavHome">
                    <h1>Kevin Julio Pineda</h1>
                    <div className="navHome">
                        <ul className="menuHome">
                            <li><Link className="LinkNavHome Start" to="/#"><span className='linkText'>Inicio</span></Link></li>
                            <li><a className="LinkNavHome About" href='#About'><span className='linkText'>Sobre mi</span></a></li>
                            <li><Link className="LinkNavHome Projects" to="/#"><span className='linkText'>Proyectos</span></Link></li>
                            <li><Link className="LinkNavHome Contact" to="/login"><span className='linkText'>Contacto</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar