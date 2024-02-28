import Navbar from './components/navbar';
import './App.css';
import {Component} from 'react';
import Login from './components/login';


class App extends Component{
  constructor(props){
    super(props);
    this.state={isLoggedin:false}
  }
render(){
  return (
    <div className="App">
    {this.state.isLoggedin?<Navbar/>: <Login/> }

    
    </div>
  );
}

}

//function App() {
  
//}

export default App;
