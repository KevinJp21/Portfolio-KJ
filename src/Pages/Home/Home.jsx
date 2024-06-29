import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/Navbar';
import FloatNavbar from '../../Components/NavBar/FloatNavbar';
import Footer from '../../Components/Footer/Footer';

import Start from '../../Secciones/SeccionesHome/Start/Start';
const About = lazy(() => import('../../Secciones/SeccionesHome/About/About'));
const Projects = lazy(() => import('../../Secciones/SeccionesHome/Projects/Projects'));
const Skills = lazy(() => import('../../Secciones/SeccionesHome/Skills/Skills'));

const LazyLoadSection = ({ component: Component, fallback }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`lazyLoadSectionHome ${isVisible ? 'visible' : ''}`}>
            {isVisible ? (
                <Suspense fallback={fallback}>
                    <Component />
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

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
            <div className="bg-absolute fixed top-0 z-[-2] h-screen w-screen"></div>
            <main className="relative z-10">
                {isMobile ? <FloatNavbar /> : <NavBar />}
                <Start />
                <LazyLoadSection component={Projects} fallback={<div className='fallback'>Loading Projects...</div>} />
                <LazyLoadSection component={About} fallback={<div className='fallback'>Loading About...</div>} />
                <LazyLoadSection component={Skills} fallback={<div className='fallback'>Loading Skills...</div>} />
                <Footer />
            </main>
        </div>
    );
};

export default Home;