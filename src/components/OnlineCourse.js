import React from 'react';

const OnlineCourse = () => {
    return (
        <div className='OnlineCourse container'>
            <h2  className="fw-lighter mt-5 text-center">Как проходит обучение </h2>
            <h2 className="fw-bold text-center mb-5">На наших онлайн курсах</h2>

            <div className="row">
                <div className="col-md-3">
                    <div className="imgBox">
                        <img src="/img/Group (3).png" alt=""/>
                    </div>
                    <p className='mt-3'>Записываетесь на курс</p>
                    <img className="arrow" src="/img/Group 3 (1).png" alt=""/>
                </div>


                <div className="col-md-3">
                    <img   className="arrow  arr1"  src="/img/Group 4.png" alt=""/>
                    <img className="arr2 d-none"  src="/img/Group 42.png" alt=""/>

                    <div className="imgBox">
                        <img src="/img/quality.png" alt=""/>
                    </div>
                   <p className='mt-3'>Проходите занятия и выполняете домашние задания</p>

                    <div className="arr2 d-none"><img src="/img/arr2.png" alt=""/></div>
                </div>


                <div className="col-md-3">
                    <div className="imgBox">
                        <img src="/img/mortarboard 1.png" alt=""/>
                    </div>
               <p className='mt-3'>Сдаёте успешно экзамен</p>
                    <img className="arrow"  src="/img/Group 3 (1).png" alt=""/>
                </div>




                <div className="col-md-3">
                    <img  className="arrow"  src="/img/Group 42.png" alt=""/>
                    <img className="arr2 d-none"  src="/img/Group 42.png" alt=""/>

                    <div className="imgBox">
                        <img src="/img/target 1.png" alt=""/>
                    </div>
                    <p className='mt-3'>Приходите к своим мечтам</p>

                </div>



            </div>
        </div>
    );
};

export default OnlineCourse;