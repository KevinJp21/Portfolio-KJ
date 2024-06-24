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
        <div className="min-h-screen relative">
       <div class="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <main className="relative z-10">
            {isMobile ? <FloatNavbar /> : <NavBar />}
            <Start />
            <Projects />
            <About />
        </main>
    </div>
    );
};

export default Home;
