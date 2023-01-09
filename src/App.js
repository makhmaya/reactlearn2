import React,{useState} from 'react';
import './App.css';
import HEADER from './components/header/HEADER'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MAGAZIN from "./components/MAGAZIN";
import MAIN from './components/main/MAIN'
import FOOTER from "./components/footer/FOOTER"
import BRAND from './components/main/BRAND';
import CONTACT from './components/main/CONTACT';
import  CATEGORIES  from './components/CATEGORIES';
import SHOWFULITEM from './components/SHOWFULITEM';
  

class App extends React.Component {
constructor(){
super();
this.state={
  orders:[],
  cards:[
    { img: "img/1.png", title: "Футболка USA", price:"$229",id:"1", category:"футболки"},
    { img: "img/2.png", title: "Купальник Glow", price: "$229", id: "2", category: "купальник"},
    { img: "img/3.png", title: "Свитшот Sweet Shot", price: "$229", id: "3", category: "свитшот" },
    { img: "img/1.png", title: "Футболка USA", price: "$229", id: "4", category:"футболки" },
    { img: "img/2.png", title: "Купальник Glow", price: "$229", id: "5", category:"купальник" },
    { img: "img/3.png", title: "Свитшот Sweet Shot", price: "$229", id: "6", category: "свитшот" },

  ],
  currentItems:[],
  showfullitem:false,
fullitem:{}

}
  this.state.currentItems=this.state.cards;
  this.addtocart=this.addtocart.bind(this)
    this.ondelete=this.ondelete.bind(this);
      this.categ=this.categ.bind(this);
      this.onshowitem=this.onshowitem.bind(this);
      this.onclose=this.onclose.bind(this);
}
 
render(){
  return (
    <div className="App">
      <BrowserRouter>
      <HEADER orders={this.state.orders} ondelete={this.ondelete}/>
     
      <Routes>
        <Route exact path="/main" element={<MAIN cards={this.state.currentItems} onadd={this.addtocart} onshowitem={this.onshowitem} />}/>
        <Route path="/magazin" element={<MAGAZIN cards={this.state.currentItems} onadd={this.addtocart} add={this.categ}/>}/>
    
          <Route path="/brand" element={<BRAND/>}/>
          <Route path="/contact" element={<CONTACT/>}/>
      </Routes>
      </BrowserRouter>
          {this.state.showfullitem && <SHOWFULITEM item={this.state.fullitem} onadd={this.addtocart} onshowitem={this.onshowitem} onclose={this.onclose}/>}
    
      <FOOTER/>
    
    </div>
  );
}
onshowitem=(item)=>{
  this.setState({fullitem:item})
this.setState({showfullitem:!this.state.showfullitem})
}
onclose=()=>{
  this.setState({ showfullitem:false})
}
  addtocart=(item)=>{
    let isarray=false;
    this.state.orders.forEach(el=>{
       if(el.item===item.item)
       isarray=true;
    })
      if(!isarray) {
    this.setState({ orders:[...this.state.orders,item]})
    console.log('added')
       }
         
    }
    categ = (category) => {
      if(category==='all'){
             this.setState({
        currentItems:this.state.cards
      })
      return
      }
      else{
   this.setState({
        currentItems:this.state.currentItems.filter(el=>el.category===category   )
      })
      }
   
     console.log('vse rabotate',category);
   }
  ondelete=(id)=>{
    this.setState({orders:this.state.orders.filter(el=>el.id!==id)})
    console.log('delete',id)
  }

}

export default App;
