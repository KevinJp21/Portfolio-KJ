import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
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
            <Layout>
                <Start />
                <LazyLoadSection component={Projects} fallback={<div className='fallback' id='Projects'>Loading Projects...</div>} />
                <LazyLoadSection component={About} fallback={<div className='fallback' id='About'>Loading About...</div>} />
                <LazyLoadSection component={Skills} fallback={<div className='fallback' id='Skills'>Loading Skills...</div>} />
            </Layout>
    );
};

export default Home;