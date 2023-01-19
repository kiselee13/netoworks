import React from 'react';
import s from './Footer.module.scss';
import llogo from '../../img/llogo.png';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.contain}>
            <img className={s.llogo}src={llogo} />
            <div className={s.rules}>© 2022 Netowork<br/>Все права защищены</div>
   
        </div>

        <div className={s.about}>
            <ul className={s.list}>
                <li>О платформе</li>
                <li>Как разместить заказ</li>
                <li>Как получить заказ</li>
                <li>Служба поддержки</li>
            </ul>
        </div>

        <div className={s.politics}>
            <ul className={s.secure}>
                <li>Правила работы сервиса</li>
                <li>Политика конфиденциальности</li>
            </ul>
        </div>
        </div>
    );
};

export default Footer;