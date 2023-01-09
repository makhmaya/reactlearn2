import React,{useState}from 'react';
import "./../header/header.css"
class CARD extends React.Component {
 render(props){
   return (
     <li className="card">
       <img src={this.props.img} alt="tovar" onClick={()=>{this.props.onshow(this.props.item)}} />
       <h4> {this.props.title}</h4>
       <p>{this.props.price}</p>
       <button className='addtocart' onClick={()=>this.props.onadd(this.props.item)}>+</button>
     </li>
   );
 }

}
 
export default CARD;