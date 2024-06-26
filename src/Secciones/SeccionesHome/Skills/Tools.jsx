import React from 'react';
import './Tools.css';

export const Tools = ({ Logo, name }) => {
    return (
        <div className={`cardsSkills ${name}`}>
            <img src={Logo} alt={name} width={'200px'} height={'200px'} />
        </div>
    );
}

export const IA = ({ Logo, name }) => {
    return (
        <div className={`cardsSkills ${name}`}>
            <img src={Logo} alt={name} width={'200px'} height={'200px'} />
        </div>
    );
}

export const Others = ({ Logo, name }) => {
    return (
        <div className={`cardsSkills ${name}`}>
            <img src={Logo} alt={name} width={'200px'} height={'200px'} />
        </div>
    );
}

