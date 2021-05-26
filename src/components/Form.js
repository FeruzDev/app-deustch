import React from 'react';

const Form = () => {
    return (
        <div className="Form container">
            <h2>Пройдите первый урок бесплатно</h2>
            <h2 className='fw-bold'>Оставьте заявку</h2>

            <div className="row">
              <div className="col-md-8">
                  <div className="row">
                      <div className="col-6">
                          <input type="text" className="  w-100 h-100" placeholder="Ф.И.О"/>
                      </div>
                      <div className="col-6">
                          <input type="text" className="  w-100" placeholder='+998'/>
                      </div>
                  </div>
              </div>

                <div className="col-md-4">
                    <button className="btn w-100  ">Подтвердить</button>
                </div>
            </div>

        </div>
    );
};

export default Form;