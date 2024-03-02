import Navbar from './components/navbar';
import './App.css';
import {Component} from 'react';
import Login from './components/login';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';





class App extends Component{
  constructor(props){
    super(props);
    this.state={isLoggedin:true}
  }
  

 


render(){

  return (
   
    <BrowserRouter>
    <div className="App">
    {this.state.isLoggedin?<div><Navbar/><Home/></div>: <Login/> }

    <Footer/>
    </div>

    </BrowserRouter>
    
  );
}

}

//function App() {
  
//}

export default App;
