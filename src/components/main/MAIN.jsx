import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import CARD from './../cards/CARD.jsx'
const MAIN = (props) => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( 
  <main>
    <section className="main">
      <div className="main__row"></div>
      <div className="container">
     
        <div className="main__items">
         
          <div className="main__title">
              <h1>Новые поступления
                в этом сезоне</h1>
              <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
              <div className="main__buttons">
                <div><img src="/img/v.png"></img></div> 
                <button className="main__btn">Открыть магазин</button>
              </div>
          </div>
            
          
             
          <div className="main__img">
            <img src="/img/bg (3).png"/>
            <img src="/img/bg (1).png"/>
            <img src="/img/bg (2).png"/>

          </div>
        </div>
      
        
      </div>
    </section>
    <section className='collection'>
      <div className="collection__items container">
          <h2>Новая коллекция</h2>
          <ul className="magazin__cards">
         
            {props.cards.map(item => <CARD item={item} onadd={props.onadd} img={item.img} title={item.title} price={item.price} key={item.id} onshow={props.onshowitem}/>)}
          </ul>
          <div className='collection__box'>
            <button className='collection__btn'>Открыть магазин</button>
          </div>
         
      </div>
    </section>
    <section>
      <div className="primary container">
          <h2>Что для нас важно</h2>
        <div className="primary__items">
          <div className="primary__item">
            <img src="/img/icon.png"/>
              <h3>Качество</h3>
              <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
          </div>
            <div className="primary__item">
              <img src="img/icon (1).png" />
              <h3>Скорость</h3>
              <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
            </div>
            <div className="primary__item">
              <img src="img/hand.png" />
              <h3>Ответственность</h3>
              <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
            </div>
        </div>
      </div>
    </section>
    <section>
      <div className=" team container">
          <h2>Команда мечты Womazing</h2>
         
          <div className="team__items">
          
            <div className="team__img">
        
                  <img src="/img/b.png" />
              
                
              

            </div>
               
          
            <div className="team__title">
              <h4>Для каждой</h4>
              <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.

                Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
              <NavLink to="/podrobnee" className="mainly">Подробнее о бренде</NavLink>
            </div>
          </div>
           
   
       
      </div>
    </section>
  </main>
   );
}
 
export default MAIN;