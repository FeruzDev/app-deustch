import React from 'react';

const Header = () => {
    return (
        <div className="Header container">
            <img src="/img/Group 1.png" className='position-absolute top-0' style={{right: "0"}} alt=""/>
            <h1>Курсы <span className='fw-bold'>Немецкого</span> <br/>языка по Zoom</h1>
            <p>Разговорная практика с первого занятия</p>
            <a>Бесплатный пробный урок</a>
        </div>
    );
};

export default Header;