import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Home.css';
import Layout from '../../Components/Layout/Layout';
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
    return (
        <HelmetProvider>
            <Helmet>
                <title>Portfolio | Kevin Julio</title>

                <meta
                    name="description"
                    content="Soy Kevin Julio Pineda, ingeniero de sistemas especializado en desarrollo frontend. Con experiencia en liderazgo de proyectos, metodologías ágiles y arquitectura de software, busco crear soluciones tecnológicas innovadoras. Descubre mis trabajos y habilidades en mi portfolio."
                />
                <meta
                    name="keywords"
                    content="Kevin Julio Pineda, portfolio, KevinJp21, ingeniero de sistemas, desarrollo frontend, proyectos tecnológicos, metodologías ágiles, arquitectura de software, inteligencia artificial"
                />
                <meta name="author" content="Kevin Julio Pineda" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Portfolio | Kevin Julio" />
                <meta property="og:description" content="Soy Kevin Julio Pineda, ingeniero de sistemas especializado en desarrollo frontend. Con experiencia en liderazgo de proyectos, metodologías ágiles y arquitectura de software, busco crear soluciones tecnológicas innovadoras. Descubre mis trabajos y habilidades en mi portfolio." />
                <meta property="og:image" content="https://portfolio-kj.vercel.app/HomeScreen.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Captura de pantalla de la página de inicio del portfolio de Kevin Julio" />
                <meta property="og:url" content="https://portfolio-kj.vercel.app" />
                <meta property="og:updated_time" content="2024-07-03T09:30:00Z" />
            </Helmet>
            <Layout>
                <Start />
                <LazyLoadSection component={Projects} fallback={<div className='fallback' id='Projects'>Loading Projects...</div>} />
                <LazyLoadSection component={About} fallback={<div className='fallback' id='About'>Loading About...</div>} />
                <LazyLoadSection component={Skills} fallback={<div className='fallback' id='Skills'>Loading Skills...</div>} />
            </Layout>
        </HelmetProvider>

    );
};

export default Home;