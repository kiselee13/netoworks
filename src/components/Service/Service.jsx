import React from 'react';
import s from './Service.module.scss';
import ppl from '../../img/ppl.png';
import ppl_two from '../../img/ppl_two.png';
import ppl_three from '../../img/ppl_three.png';


const Service = () => {
    return (
        <div className={s.s_block}>
            <div className={s.works}>Как работает сервис?</div>


            <div className={s.box}>
                <div className={s.help}>
                    <div className={s.descr}>Опишите услугу</div>
                    <div className={s.descr_xs}>Опишите свою задачу и условия.<br />
                        Это бесплатно и займёт 3‑4 минуты</div>
                    <img className={s.ppl} src={ppl} />
                </div>
                <div className={s.help}>
                    <div className={s.descr}>Получите отклики</div>
                    <div className={s.descr_xs}>Отклики с ценами от исполнителей. <br />Обычно они приходят в течение 30 минут</div>
                    <img className={s.ppl_two} src={ppl_two} />
                </div>
                <div className={s.help}>
                    <div className={s.descr}>Выберите исполнителя</div>
                    <div className={s.descr_xs}>Выберите подходящего исполнителя
                        <br />и обсудите сроки выполнения</div>
                    <img className={s.ppl_three} src={ppl_three} />
                </div>
            </div>

        </div>
    );
};

export default Service;