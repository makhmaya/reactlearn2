import React,{useState} from 'react';
import CARD from './cards/CARD';
import Slider from "react-slick"
import OPENCARD from './cards/OPENCARD';
import ORDER from './ORDER';
import CATEGORIES from './CATEGORIES';

const MAGAZIN = (props) => {
  const [cartopen, setopencart] = useState(false);
  const showorders = () => {
    return (
      <div>
        {props.orders.map(item => (<ORDER item={item} ondelete={props.ondelete} />)

        )
        }
      </div>
    )

  }

  const noshow = () => {
    return (
      <div className='empty'>
        <h4>tovarov net</h4>
      </div>
    )
  }

  return ( 

    <div className="magazin container">
      <h2>Магазин</h2>
      <p><span>Главная</span>-<span>Магазин</span></p>
      <CATEGORIES onadd={props.add }/>
  
     
      <p>Показано: 9 из 12 товаров</p>
        <ul className="magazin__cards">
      {props.cards.map(item => <CARD img={item.img} title={item.title} price={item.price} key={item.id} onadd={props.onadd}/>)}
        </ul>
      
      {cartopen && (

        <div className='cart'>
          <h2>КОРЗИНА</h2>
          {props.orders.length > 0 ?
            showorders(props) : noshow(props)}

        </div>


      )}
    </div>
   );

}
 
export default MAGAZIN;