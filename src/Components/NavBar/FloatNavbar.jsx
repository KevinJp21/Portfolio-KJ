import React, { useState, useEffect } from 'react'
import './FloatNavbar.css'
//Iconos
import { ReactComponent as HomeIcon } from '../../assets/Icons/Home.svg';
import { ReactComponent as AboutIcon } from '../../assets/Icons/IconAbout.svg';
import { ReactComponent as ProjectIcon } from '../../assets/Icons/IconProject.svg';
import { ReactComponent as ContactIcon } from '../../assets/Icons/IconContact.svg';
import { ReactComponent as Monitor } from '../../assets/Icons/Monitor.svg';
import { ReactComponent as Sun } from '../../assets/Icons/Sun.svg';
import { ReactComponent as Moon } from '../../assets/Icons/Moon.svg';
import { ReactComponent as Tools } from '../../assets/Icons/Tool.svg';
import { ReactComponent as World } from '../../assets/Icons/World.svg';
import { useTranslation } from 'react-i18next';

const FloatNavbar = () => {
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = sessionStorage.getItem('dark-mode');
        return savedMode !== null ? savedMode : 'system';
    });
    const changeThemeMode = (mode) => {
        setDarkMode(mode);
        sessionStorage.setItem('dark-mode', mode);
    };

    useEffect(() => {
        if (darkMode === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark-mode', prefersDark);
        } else {
            document.documentElement.classList.toggle('dark-mode', darkMode === 'dark');
        }
    }, [darkMode]);


    const handleOptionClick = (option) => {
        changeThemeMode(option);
    };

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


    const [lngMode, setLngMode] = useState(() => {
        const savedLNG = sessionStorage.getItem('lng');
        return savedLNG !== null ? savedLNG : 'en';
    });

    const changeLNGMode = (mode) => {
        setLngMode(mode);
        sessionStorage.setItem('lng', mode);
        i18n.changeLanguage(mode);
    };

    useEffect(() => {
        const savedLNG = sessionStorage.getItem('lng');
        if (savedLNG && savedLNG !== i18n.language) {
            i18n.changeLanguage(savedLNG);
        }
    }, [i18n]);

    const handleLanguageChange = (lng) => {
        changeLNGMode(lng);
        setLanguageDropdownOpen(false);
    };

    const languages = [
        { label: 'Español', value: 'es' },
        { label: 'English', value: 'en' },
    ];


    return (
        <header className='FloatNavbar'>
            <nav className='FloatNavBarHome'>
                <div className="containerFloatNavHome">
                    <div className="FloatnavHome">
                        <ul className="FloatmenuHome">
                            <li><a className="LinkFloatNavHome Start" href='#Start' aria-label="Start"><HomeIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Projects" href="#projects" aria-label="Projects"><ProjectIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome About" href='#About' aria-label="About" ><AboutIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Skills" href="#Skills" aria-label="Skills"><Tools className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com" aria-label="Contact"><ContactIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li>
                                <a title='BTNTheme' className={`select ${darkMode}`} onClick={() => handleOptionClick(darkMode === 'light' ? 'dark' : darkMode === 'dark' ? 'system' : 'light')}>
                                    {renderIcon()}
                                </a>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button title='BTNLanguage' className={`select ${languageDropdownOpen ? 'select-clicked' : ''}`} onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
                                        <World />
                                        <span className="selected"></span>
                                    </button>
                                    {languageDropdownOpen && (
                                        <ul className="menu menu-open">
                                            {languages.map(language => (
                                                <li key={language.value} className={language.value === lngMode ? 'active' : ''} onClick={() => handleLanguageChange(language.value)}>
                                                    <span>{language.label}</span>
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
    )
}

export default FloatNavbar