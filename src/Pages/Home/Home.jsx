import React, {useEffect, useState} from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/Navbar';
import FloatNavbar from '../../Components/NavBar/FloatNavbar'; //Cambiar en 720px
import Start from '../../Secciones/SeccionesHome/Start/Start';
import About from '../../Secciones/SeccionesHome/About/About';

const Home = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    const handleResize = () =>{
        setIsMobile(window.innerWidth <= 720);
    };

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    return (
        <main>
            {isMobile ? <FloatNavbar /> : <NavBar />}
            <Start />
            <About />
        </main>
    )
}

export default Home