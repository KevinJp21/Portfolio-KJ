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
                            <li><a className="LinkNavHome Start" href='#Start'><span className='linkText'>Inicio</span></a></li>
                            <li><a className="LinkNavHome About" href='#About'><span className='linkText'>Sobre mi</span></a></li>
                            <li><a className="LinkNavHome Projects" href="#projects"><span className='linkText'>Proyectos</span></a></li>
                            <li><a className="LinkNavHome Contact" href="mailto: kevinjp821@gmail.com"><span className='linkText'>Contacto</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar