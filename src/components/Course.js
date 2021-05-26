import React from 'react';

const Course = () => {
    return (
        <div className="Course">


            <div className="container">
                <h2 className="fw-lighter">Все курсы по учению</h2>
                <h2 className="fw-bold">Немецкого языка</h2>
                <div className="row ser">

                    <div className="col-md-4 ">
                        <img src="/img/Rectangle 6.png" alt=""/>
                        <h3>Супер-интенсив групповой курс </h3>
                    </div>


                    <div className="col-md-4">
                        <img src="/img/Rectangle 7.png" alt=""/>
                        <h3>Интенсив групповой курc</h3>
                    </div>


                    <div className="col-md-4">
                        <img src="/img/Rectangle 8.png" alt=""/>
                        <h3>Экстенсив групповой курс  </h3>
                    </div>

                </div>


                <div className="row price">

                    <div className="col-md-4">

                        <div className="courseBg">
                            <h4>А1, А2, Б1, Б2</h4>
                            <h3>
                                Супер-интенсив групповой курc
                            </h3>
                            <p><img src="/img/group (1) 2.png " />макс. 12 человек</p>
                            <p><img src="/img/Group (2).png"  />4 недели</p>
                            <p><img src="/img/clock.png" />Пн. Вт. Ср. Чт. Пт.</p>
                            <h3>
                                4 академических часа
                            </h3>
                            <p><img src="/img/clock.png"  />с 9:15 – 12:15 </p>
                            <h3>Запись на курс в любое время</h3>

                            <h3><span>$250</span> / модуль</h3>
                        </div>
                    </div>




                    <div className="col-md-4">

                        <div className="courseBg">
                            <h4>А1, А2, Б1, Б2</h4>
                            <h3>
                                Интенсив групповой курc
                            </h3>
                            <p><img src="/img/group (1) 2.png " />макс. 12 человек</p>
                            <p><img src="/img/Group (2).png"  />8 недели</p>
                            <p><img src="/img/clock.png" />Пн.   Ср.  Пт.</p>
                            <h3>
                                3академических часа
                            </h3>
                            <p><img src="/img/clock.png"  />с 13:15 – 15:50 </p>
                            <h3>Запись на курс в любое время</h3>

                            <h3><span>$200</span> / модуль</h3>
                        </div>
                    </div>



                    <div className="col-md-4">

                        <div className="courseBg">
                            <h4>А1, А2, Б1, Б2</h4>
                            <h3>
                                Экстенсив групповой курc
                            </h3>
                            <p><img src="/img/group (1) 2.png " />макс. 12 человек</p>
                            <p><img src="/img/Group (2).png"  />12 недели</p>
                            <p><img src="/img/clock.png" />Пн. Ср.  или  Вт. Чт.</p>
                            <h3>
                                2 академических часа
                            </h3>
                            <p><img src="/img/clock.png"  />с 18:00 – 19:40  </p>
                            <h3>Запись на курс в любое время</h3>

                            <h3><span>$150</span> / модуль</h3>
                        </div>
                    </div>





                </div>



                <div className="bigBox">
                <div className="courseBg pt-3">
                    <h3>LakizoTraining коммуникационные групповые занятия </h3>

                    <div className="d-flex mt-3">

                        <p><img src="/img/group (1) 3.png " />макс. 12 человек</p>
                        <p className="ml-5"> <img src="/img/clock2.png" />Суббота</p>
                    </div>
                    <div className="d-flex">
                        <h3>
                            2 академических часа
                        </h3>
                        <p className='p-0'>  с 10:15 – 11:15, 12:15 – 13:45, 14:15 – 15:15  </p>
                    </div>


                    <h3>Запись на курс в любое время</h3>


                    <div className="courseLog d-flex">
                        <img className="club" src="/img/CLUB.png" alt=""/>
                        <h3  className="text-end mt-5"><span>$150</span> / модуль</h3>
                    </div>


                </div>
                </div>





            </div>


        </div>
    );
};

export default Course;