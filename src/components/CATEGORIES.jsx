import React from 'react';
 class CATEGORIES extends React.Component{
constructor(props){
  super(props)
  this.state={
    categories: [
      { key: "all", name: "all" },
      { key: "футболки", name: "футболки" },
      { key: "свитшот", name: "свитшоты" },
      { key: "купальник", name: "купальники" },
      { key: "платья", name: "платья" },
    ]
  }

}
render(props){
  return(
    <ul className='magazin__filter'>
      {this.state.categories.map(item => (
        <li key={item.key} onClick={()=>{this.props.onadd(item.key)}}>{item.name}</li>
      ))}
    </ul>
 
  )
  
}
 
}
export default CATEGORIES