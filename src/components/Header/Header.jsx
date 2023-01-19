import React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.scss';


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.leftside}>
            <img className={s.logo}src={logo} />
            <ul>
                <li>Создать задание</li>
                <li>Найти задание</li>
            </ul>
            </div>

            <div className={s.hbutton}>
                <button className={s.rightbutton}>
                    Вход и регистрация </button>
            </div>
            
        </div>
    );
};

export default Header;