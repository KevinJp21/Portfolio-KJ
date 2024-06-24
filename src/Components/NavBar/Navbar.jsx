import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        // Recupera el estado del modo oscuro desde localStorage
        const savedMode = localStorage.getItem('dark-mode');
        if (savedMode !== null) {
            return savedMode === 'true'; // Si savedMode es 'true', retorna true, de lo contrario false
        } else {
            // Si no hay un estado guardado, usa la preferencia del sistema
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

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
    }, []);

    const changeThemeMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            // Guarda el nuevo estado en localStorage
            localStorage.setItem('dark-mode', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        // Aplica el modo oscuro/claro en función del estado
        if (darkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkMode]);

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
                            <li><button className='ChangeThemeMode' onClick={changeThemeMode}>d</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
