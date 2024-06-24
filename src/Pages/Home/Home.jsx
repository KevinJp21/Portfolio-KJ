import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/Navbar';
import FloatNavbar from '../../Components/NavBar/FloatNavbar'; // Cambiar en 720px
import Start from '../../Secciones/SeccionesHome/Start/Start';
import About from '../../Secciones/SeccionesHome/About/About';
import Projects from '../../Secciones/SeccionesHome/Projects/Projects';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 720px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 720px)');

        const handleMediaChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <main>
            {isMobile ? <FloatNavbar /> : <NavBar />}
            <Start />
            <Projects />
            <About />
        </main>
    );
};

export default Home;
