import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import "./header.css"
import ORDER from '../ORDER';
const HEADER=(props)=>{
  const [cartopen, setopencart] = useState(false);
  const showorders=()=>{
    return (
      <div>
        {props.orders.map(item => (<ORDER item={item} ondelete={props.ondelete}  />)
       
        )
        }
      </div>
    )

  }
 
    const noshow=()=>{
     return (
      <div className='empty'> 
        <h4>tovarov net</h4>
      </div>
     )
    }
  return (
    <header className='header'>
      <div className="header__item container">
<div className='header__menu'>
  <div className="header__logo">
    <img src="img/logo.png"/>
  </div>
  <ul className='header__menu-list'>
                <li><NavLink to="/main">Главная</NavLink></li>
                <li><NavLink to="/magazin">Магазин</NavLink></li>
                <li><NavLink to="/brand">О бренде</NavLink></li>
                <li><NavLink to="/contact">Контакты</NavLink></li>
  </ul>
            <div className="header__contacts">
              <ul className='header__menu-list'>
              <li><img src="/img/Group.png"></img> <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a> </li>
              <li  ><img src="/img/Group (1).png" onClick={() => setopencart(!cartopen)} className={`element ${cartopen && 'action'}`}></img> </li>
              </ul>
            </div>
      
</div>
    </div>
      {cartopen && (
       
        <div className='cart'>
          <h2>КОРЗИНА</h2>
          {props.orders.length>0?
          showorders(props):noshow(props)}
      
        </div>
        
  
      )}
    </header>
    

  )
}
export default HEADER