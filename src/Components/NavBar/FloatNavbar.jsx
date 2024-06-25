import React, { useState, useEffect } from 'react'
import './FloatNavbar.css'
import Assets from '../../assets/assets'
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
                return <Assets.icons.Sun />;
            case 'dark':
                return <Assets.icons.Moon />;
            case 'system':
            default:
                return <Assets.icons.Monitor />;
        }
    };
    return (
        <header className='FloatNavbar'>
            <nav className='FloatNavBarHome'>
                <div className="containerFloatNavHome">
                    <div className="FloatnavHome">
                        <ul className="FloatmenuHome">
                            <li><a className="LinkFloatNavHome Start" href='#Start'><Assets.icons.HomeIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Projects" href="#projects"><Assets.icons.ProjectIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome About" href='#About'><Assets.icons.AboutIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com"><Assets.icons.ContactIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com"><Assets.icons.ContactIcon className="home-icon" width={"30px"} heigh={"30px"} /></a></li>
                            
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