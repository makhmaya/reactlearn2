import React from 'react';
import { NavLink } from 'react-router-dom'
const FOOTER = () => {
  return ( 
  <footer>
    <div
     className="footer__item container">
      <div className='header__menu'>
        <div className="header__logo">
          <img src="img/logo.png" />
        </div>
        <ul className='header__menu-list'>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Магазин</a></li>
          <li><a href="#">О бренде</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div className="header__contacts">
          <ul className='header__menu-list'>
            <li><img src="/img/Group.png"></img> <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a> </li>
            <li><img src="/img/Group (1).png"></img> </li>
          </ul>
        </div>
      </div>
      <div className="footer__items">
          <div className="footer__elem">
            <p>© Все права защищены</p>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
          <ul className="footer__elem">
            <li>Пальто</li>
            <li>Свитшоты</li>
            <li>Кардиганы</li>
            <li>Толстовки</li>
          </ul>
          <div className="footer__elem">
            <p>hello@womazing.com</p>
            <div className="footer__social">
              <a href="#"><img src="img/ins (1).png"></img></a>
              <a href="#"><img src="img/ins (2).png"></img></a>
              <a href="#"><img src="img/ins (3).png"></img></a>
            </div>
            <img src="/img/visa.svg"/>
          </div>
      </div>
    </div>
  </footer> );
}
 
export default FOOTER;