import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
const CONTACT = () => {
  const [name,setname]=useState();

const handle=(e)=>{
  setname({ value: e.target.value })
}
  
  return ( 
    <div className="magazin container">
      <h2>Контакты</h2>
      <p><span>Главная</span>-<span>бренд</span></p>
     <ul className="contacts">
        <li><p>Телефон</p><span>+7 (495) 823-54-12</span></li>
        <li><p>E-mail</p><span>info@sitename.com</span></li>
        <li><p>Адрес</p><span>г. Москва, 3-я улица Строителей, 25</span></li>
     </ul>
     <form>
        <h3>Напишите нам</h3>
        <div className='input'><input type="text" placeholder="name"  onChange={handle}/></div> 
      
        <div className='input'><input type="text" placeholder="email" />

        </div> 
        <div className='input'> <input type="text" placeholder="number" onChange={(e) => setname({ value: e.currentTarget.value })} /></div>
        <div className='inputtext'> <textarea resize="false" placeholder="message" onChange={(e) => setname({ value: e.currentTarget.value })} /> </div>
        <input type="submit" placeholder="Отправить" onClick={handle}/>
     </form>



    </div>
   );
}

 
export default CONTACT;