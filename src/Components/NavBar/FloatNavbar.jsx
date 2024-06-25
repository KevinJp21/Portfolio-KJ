import React, { useState, useEffect } from 'react'
import './FloatNavbar.css'
import { ReactComponent as HomeIcon } from '../../assets/Icons/Home.svg'
import { ReactComponent as AboutIcon } from '../../assets/Icons/IconAbout.svg'
import { ReactComponent as ProjectIcon } from '../../assets/Icons/IconProject.svg'
import { ReactComponent as ContactIcon } from '../../assets/Icons/IconContact.svg'
import { ReactComponent as Monitor } from '../../assets/Icons/Monitor.svg';
import { ReactComponent as Sun } from '../../assets/Icons/Sun.svg';
import { ReactComponent as Moon } from '../../assets/Icons/Moon.svg';
const FloatNavbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode !== null ? savedMode : 'system';
    });
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
    return (
        <header className='FloatNavbar'>
            <nav className='FloatNavBarHome'>
                <div className="containerFloatNavHome">
                    <div className="FloatnavHome">
                        <ul className="FloatmenuHome">
                            <li><a className="LinkFloatNavHome Start" href='#Start'><HomeIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome About" href='#About'><AboutIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Projects" href="#projects"><ProjectIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com"><ContactIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li>
                                <button className={`select ${darkMode}`} onClick={() => handleOptionClick(darkMode === 'light' ? 'dark' : darkMode === 'dark' ? 'system' : 'light')}>
                                    {renderIcon()}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default FloatNavbar