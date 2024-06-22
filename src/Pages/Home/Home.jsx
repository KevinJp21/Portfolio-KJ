import React from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/Navbar';
import FloatNavbar from '../../Components/NavBar/FloatNavbar'; //Cambiar en 720px
import Start from '../../Secciones/SeccionesHome/Start/Start';
import About from '../../Secciones/SeccionesHome/About/About';

const Home = () => {
    return (
        <main>
            <NavBar />
            <Start />
            <About />
        </main>
    )
}

export default Home