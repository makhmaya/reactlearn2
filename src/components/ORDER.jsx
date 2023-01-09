import React from 'react'
import { FaTrash} from "react-icons/fa";
class ORDER extends React.Component {

  render(props){
    return (
     
    <div className='order'>
      <img src={this.props.item.img} alt="tovar" />
      <h4> {this.props.item.title}</h4>
      <p>{this.props.item.price}</p>
  <FaTrash onClick={()=>{this.props.ondelete(this.props.item.id)}} className="trash"/>
    </div>
    );
  }

}
 
export default ORDER;