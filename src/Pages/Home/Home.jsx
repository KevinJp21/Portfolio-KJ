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
       <div className="bg-absolute fixed top-0 z-[-2] h-screen w-screen">
       </div>
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
