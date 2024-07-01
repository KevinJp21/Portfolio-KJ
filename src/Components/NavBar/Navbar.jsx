import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Monitor } from '../../assets/Icons/Monitor.svg';
import { ReactComponent as Sun } from '../../assets/Icons/Sun.svg';
import { ReactComponent as Moon } from '../../assets/Icons/Moon.svg';
import { ReactComponent as World } from '../../assets/Icons/World.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = sessionStorage.getItem('dark-mode');
    return savedMode !== null ? savedMode : 'system';
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);




  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);

  const handleOptionClick = (option) => {
    changeThemeMode(option);
    setDropdownOpen(false);
  };

  const optionsTheme = [
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
    <header className={`NavBar${scroll ? ' scrolled' : ''}`}>
      <nav className='NavBarHome'>
        <div className="containerNavHome">
          <h1>Kevin Julio Pineda</h1>
          <div className="navHome">
            <ul className="menuHome">
              <li><a className="LinkNavHome Start" href='/#Start'><span className='linkText'>{t('Header.start')}</span></a></li>
              <li><a className="LinkNavHome Projects" href="/#Projects"><span className='linkText'>{t('Header.projects')}</span></a></li>
              <li><a className="LinkNavHome About" href='/#About'><span className='linkText'>{t('Header.about_me')}</span></a></li>
              <li><a className="LinkNavHome Skills" href="/#Skills"><span className='linkText'>{t('Header.skills')}</span></a></li>
              <li><a className="LinkNavHome Contact" href="mailto: kevinjp821@gmail.com"><span className='linkText'>{t('Header.contact')}</span></a></li>
              <li>
                <div className="dropdown">
                  <button title={t("Header.BtnThemMode")} className={`select ${dropdownOpen ? 'select-clicked' : ''}`} onClick={handleDropdownClick}>
                    {renderIcon()}
                    <span className="selected"></span>
                  </button>
                  {dropdownOpen && (
                    <ul className="menu menu-open">
                      {optionsTheme.map(option => (
                        <li key={option.value} className={option.value === darkMode ? 'active' : ''} onClick={() => handleOptionClick(option.value)}>
                          <span>{option.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button title={t("Header.BtnTLanguage")} className={`select ${languageDropdownOpen ? 'select-clicked' : ''}`} onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
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
  );
};

export default Navbar;
