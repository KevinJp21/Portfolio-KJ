import React, { useEffect, useState } from 'react'
import './Layout.css'
import NavBar from '../NavBar/Navbar';
import FloatNavbar from '../NavBar/FloatNavbar';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 720px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
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
                {children}
                <Footer />
            </main>
        </div>
    )
}