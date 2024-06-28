import React from 'react';
import './Tools.css';

export const Tools = ({ Logo, name }) => {
    return (
        <div className={`cardsSkills ${name}`}>
            <img decoding="async" fetchpriority="low" src={Logo} alt={name} width={'200px'} height={'200px'} loading='lazy'/>
        </div>
    );
}

