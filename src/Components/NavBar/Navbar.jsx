import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ReactComponent as Monitor } from '../../assets/Icons/Monitor.svg';
import { ReactComponent as Sun } from '../../assets/Icons/Sun.svg';
import { ReactComponent as Moon } from '../../assets/Icons/Moon.svg';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode !== null ? savedMode : 'system';
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY > 50);

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const changeThemeMode = (mode) => {
        setDarkMode(mode);
        localStorage.setItem('dark-mode', mode);
    };

    useEffect(() => {
        if (darkMode === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark-mode', prefersDark);
        } else {
            document.documentElement.classList.toggle('dark-mode', darkMode === 'dark');
        }
    }, [darkMode]);

    const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);

    const handleOptionClick = (option) => {
        changeThemeMode(option);
        setDropdownOpen(false);
    };

    const options = [
        { label: 'Claro', value: 'light' },
        { label: 'Oscuro', value: 'dark' },
        { label: 'Auto', value: 'system' },
    ];

    const renderIcon = () => {
        switch (darkMode) {
            case 'light':
                return <Sun />;
            case 'dark':
                return <Moon />;
            case 'system':
            default:
                return <Monitor />;
        }
    };

    return (
        <header className={`NavBar${scroll ? ' scrolled' : ''}`}>
            <nav className='NavBarHome'>
                <div className="containerNavHome">
                    <h1>Kevin Julio Pineda</h1>
                    <div className="navHome">
                        <ul className="menuHome">
                            <li><a className="LinkNavHome Start" href='#Start'><span className='linkText'>Inicio</span></a></li>
                            <li><a className="LinkNavHome Projects" href="#projects"><span className='linkText'>Proyectos</span></a></li>
                            <li><a className="LinkNavHome About" href='#About'><span className='linkText'>Sobre mi</span></a></li>
                            <li><a className="LinkNavHome Skills" href="#Skills"><span className='linkText'>Habilidades</span></a></li>
                            <li><a className="LinkNavHome Contact" href="mailto: kevinjp821@gmail.com"><span className='linkText'>Contacto</span></a></li>
                            <li>
                                <div className="dropdown">
                                    <button className={`select ${dropdownOpen ? 'select-clicked' : ''}`} onClick={handleDropdownClick}>
                                    {renderIcon()}
                                        <span className="selected">
                                        </span>
                                    </button>
                                    {dropdownOpen && (
                                        <ul className="menu menu-open">
                                            {options.map(option => (
                                                <li key={option.value} className={option.value === darkMode ? 'active' : ''} onClick={() => handleOptionClick(option.value)}>
                                                    <span>{option.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
