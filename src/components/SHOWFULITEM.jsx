import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';

class SHOWFULITEM extends Component {
  constructor(props) {
    super(props);

  }

  render(props) {
    return (
      <div className='fullitem'>
        <div className='modalwindow'>
          < BsX className='closermodal' onClick={() => { this.props.onclose()}}/>
             <img src={this.props.item.img} alt="tovar" onClick={() => { this.props.onshow(this.props.item) }} />
          <div className='modalwindow__title'>        <h4> {this.props.item.title}</h4>
            <p>{this.props.item.price}</p>
            <button className='addtocart' onClick={() => this.props.onadd(this.props.item)}>+</button></div></div>
  
     
      </div>
    );
  }
}



export default SHOWFULITEM;