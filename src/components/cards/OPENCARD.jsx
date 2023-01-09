import React from 'react';
const OPENCARD = (props) => {
  return ( 
    <div className="openCard">
      <h2>{props.title}</h2>
      <p><span>Главная</span>-<span>Магазин</span></p>
      <div className="openCard__items">
        <div className="openCard__img">
          <img src={props.img}/>
        </div>
        <div className="openCard__filter">
          <p className="price">{props.price}</p>
          <p>Vyberite razmer</p>
          <div className="sizes">
            <div className="size sizeS">S</div>
            <div className="size sizeM">M</div>
            <div className="size sizeL">L</div>
            <div className="size sizeX">XL</div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default OPENCARD;