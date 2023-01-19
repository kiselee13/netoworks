import React from 'react';
import s from './Cards.module.scss';
import pic_1 from '../../img/pic_1.png';
import pic_2 from '../../img/pic_2.png';
import pic_3 from '../../img/pic_3.png';
import pic_4 from '../../img/pic_4.png';  
import userpic from '../../img/userpic.png';  
import userpic_2 from '../../img/userpic_2.png';  
import userpic_3 from '../../img/userpic_3.png';  
const Cards = () => {
    return (
        <div className={s.thirdblock}>
        <div className={s.ttxt}>
            Наши лучшие исполнители
        </div>

        <div className={s.t_cards}>
            <div className={s.card_item}>
            <img className={s.pic_1}src={pic_1} />
            <img className={s.userpic}src={userpic} />
            <div className={s.names}>Максим Фролов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>

            <div className={s.card_item}>
            <img className={s.pic_2}src={pic_2} />
            <img className={s.userpic_3}src={userpic_3} />
            <div className={s.names}>Михаил Баринов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>

            <div className={s.card_item}>
            <img className={s.pic_3}src={pic_3} />
            <img className={s.userpic_3}src={userpic_3} />
            <div className={s.names}>Михаил Фролов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>

            <div className={s.card_item}>
            <img className={s.pic_4}src={pic_4} />
            <img className={s.userpic_2}src={userpic_2} />
            <div className={s.names}>Александр Громов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>
        </div>
        <div className={s.t_cards}>
            <div className={s.card_item}>
            <img className={s.pic_1}src={pic_1} />
            <img className={s.userpic}src={userpic} />
            <div className={s.names}>Михаил Фролов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>

            </div>

            <div className={s.card_item}>
            <img className={s.pic_2}src={pic_2} />
            <img className={s.userpic_3}src={userpic_3} />
            <div className={s.names}>Михаил Баринов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>

            <div className={s.card_item}>
            <img className={s.pic_3}src={pic_3} />
            <img className={s.userpic_3}src={userpic_3} />
            <div className={s.names}>Михаил Фролов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>
            </div>


            <div className={s.card_item}>
            <img className={s.pic_4}src={pic_4} />
            <img className={s.userpic_2}src={userpic_2} />
            <div className={s.names}>Александр Громов</div>
            <button className={s.portfolio}>Перейти в портфолио</button>

            </div>
        </div>
      
      </div>
    );
};

export default Cards;