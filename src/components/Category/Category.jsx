import React from 'react';
import s from './Category.module.scss';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import btn_one from '../../img/btn_one.png';  
import btn_two from '../../img/btn_two.png';  
import btn_three from '../../img/btn_three.png';  
import btn_four from '../../img/btn_four.png';  
import btn_five from '../../img/btn_five.png';  
import btn_six from '../../img/btn_six.png';  

const Category = () => {
    return (
        <div className={s.f_block}>
            <div className={s.service}>Категории услуг</div>
            <div className={s.categ}>
                <Button className={s.click} type="primary">Дизайн{<CloseOutlined />}
                </Button>
                <Button className={s.it} type="primary">Разработка IT
                </Button>
                <Button className={s.text} type="primary">Тексты и копирайтинг
                </Button>
                <Button className={s.seo} type="primary">SEO
                </Button>
                <Button className={s.consul} type="primary">Обучение и консалтинг   
                </Button>
             </div>

             <div className={s.bigbtn}>

                    <button className={s.butt}>
                    <img className={s.btn_one}src={btn_one} />
                    <div className={s.txt_xl}>Фирменный Стиль</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>
                    <button className={s.butt}>
                    <img className={s.btn_two}src={btn_two} />
                    <div className={s.txt_xl}>Дизайн логотипов</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>
                    <button className={s.butt}>
                    <img className={s.btn_three}src={btn_three} />
                    <div className={s.txt_xl}>Инфографика</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>

             </div>

             <div className={s.bigbtn}>

                    <button className={s.butt}>
                    <img className={s.btn_four}src={btn_four} />
                    <div className={s.txt_xl}>Фирменный Стиль</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>
                    <button className={s.butt}>
                    <img className={s.btn_five}src={btn_five} />
                    <div className={s.txt_xl}>Дизайн логотипов</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>
                    <button className={s.butt}>
                    <img className={s.btn_six}src={btn_six} />
                    <div className={s.txt_xl}>Инфографика</div>
                    <div className={s.txt_xs}>от 500 руб.</div>
                    
                    </button>
             </div>


        </div>
    );
};

export default Category;