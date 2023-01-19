import React from 'react';
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
import s from'./Main.module.scss';
import person from '../../img/person.png';


const Main = () => {
    return (
        <div className={s.main}>

            <div className={s.middle}>
                <div className={s.mleft}>
                    <span className={s.service}>Сервис подбора
                    <br/>
                     фрилансеров</span>
                    <span className={s.search}>Быстрый поиск исполнителей для ваших задач</span>
                </div>
            </div>
            


        
          <div className={s.f_buttons}>
          <Input className={s.input}size="large" placeholder="Мобильное прило" prefix={<SearchOutlined />} />
          <button className={s.find}>Найти</button>
          </div>
          <div className={s.l_pics}>
            <button className={s.web}>Веб дизайн</button>
            <button className={s.styles}>Фирменный стиль</button>
            <button className={s.design}>Дизайн лого</button>
          </div>

          <div className={s.r_side}>
          <img className={s.person}src={person} />
          </div>


        </div>
        
        
    );
};

export default Main;