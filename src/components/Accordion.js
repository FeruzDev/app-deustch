import React, { useState } from 'react';

const Accordion = () => {
    const accordionData = [
        {
            id: '0',
            title: ' Чтобы выучить немецкий нужно учить очень много грамматики. Это правда ? ',
            content: ` Нет, но грамматику пройдёт каждый ученик в ходе изучения языка у нас в курсе.`,
            isActive: false

        },
        {
            id: '1',
            title: 'Сколько учеников в группе ?',
            content: `  Группы набираются максимум по 12 человек, что обеспечивает максимально быстрое и качественное изучение языка.`,
            isActive: false
        },
        {
            id: '2',
            title: 'Сколько длится один академический час ? ',
            content: `  Длительность занятий 45 минут. Если бы академический час длился больше, то качество обучения существенно снизилось бы.`,
            isActive: false
        },
        {
            id: '3',
            title: 'Какой минимальный возраст учеников на курсе ?',
            content: `Можно отдавать детей с 12-14 лет, но также можно отдавать с дошкольного возраста, если ребёнок приходит с родителем от этого - эффект будет намного лучше. `,
            isActive: false
        },
        {
            id: '4',
            title: ' Получу ли я сертификат об окончании курса ?',
            content: ` Да! После окончания курса вы получите сертификат подтверждающий владение языковым уровнем.`,
            isActive: false
        },
        {
            id: '5',
            title: ' Что включено в стоимость курса ?',
            content: `В стоимость обучения будут входить:
Бесплатная подготовка к международным экзаменам + пробный внутренний тест (TestDaf, TELC, GOETHE);
Занятия по электронным учебникам «Schritte International» от ведущего немецкого издательства HUEBER
А также возможность бесплатного посещения разговорного курса” LakizoTraining” раз в месяц.(на перспективу)`,
            isActive: false
        },
        {
            id: '6',
            title: ' За сколько можно выучить немецкий с нуля ?',
            content: `  В любых начинаниях очень важными факторами являются мотивация и желание. И изучение немецкого языка не исключение.Если вы полностью погрузитесь в языковую среду с преподователем (носителем) языка, то вы продвинетесь очень быстро и далеко.Выполняя задания, которые даёт преподаватель, вы достигните желаемого результата за несколько месяцев.`,
            isActive: false
        },
        {
            id: '7',
            title: 'Сколько времени в день нужно уделять немецкому языку ? ',
            content: `   Этот вопрос беспокоит каждого, кто начинает изучение нового языка. Но чтобы ответить на него, сперва стоит задать себе другой вопрос: достаточно для чего?
Если немецкий язык нужен для себя, для души, тогда продолжительность занятия — это ровно столько, сколько вы хотите отдыхать и получать удовольствие.`,
            isActive: false
        },

    ];
    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return(
        <div className="accordionTable container">
            <h3 className="newPagesTitle text-center mt-5">Часто задаваемы <br/> <span className="fw-bold">Bопросы</span></h3>
            <form className='mt-5'>
                { accordionData.map((tab, index) => (
                    <div key={index}>
                        <h2>
                            <button
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >

                                <img src="/img/icon/Line 20.png" alt=""/>
                                <span className="title-wrapper ml-3"><p className="text-left pr-4">{tab.title}</p>
                                    <span className={ active === index  ? 'plus' : 'minus'}></span>
                                </span>
                            </button>
                        </h2>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                            <div className="privateContent">
                                { tab.content }
                            </div>
                            <img className="ml-3" src="/img/icon/Line 20.png" alt=""/>


                        </div>
                    </div>
                ))
                }
            </form>
        </div>
    );
}

export default Accordion;