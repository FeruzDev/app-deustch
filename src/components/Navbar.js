import React from 'react';

const Navbar = () => {
    return (
        <div className='Navbar'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <div className="logo">
                        <img src="/img/kd.png" alt=""/>
                        <h4>Kleines <br/>
                           <span className="fw-bold"> Deutschland</span></h4>
                    </div>

                    <a href="tel: +998991443429"  className="d-none" >
                        <img src="/img/Group (2)1.png" alt=""/>
                    </a>
                </div>
                <div className="col-md-7 d-flex justify-content-between">
                    <a href="#!">Курсы</a>
                    <a href="#!">Преимущества</a>
                    <a href="#!">Как проходить обучение</a>
                    <a href="#!">Вопросы</a>
                </div>
                <div className="col-3 text-end">
                    <a href="tel: +998991443429">
                        +998 99 <span>1443429</span>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;