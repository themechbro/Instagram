import react, {Component} from 'react';
import Stories from './stories';
import Posts from './posts';

class Home extends Component{
    constructor(props){
        super(props); 
        this.state={onLoad:true}
    }

    componentDidMount(){
        {setTimeout(() => this.setState({ onLoad: false }), 5000);}
    }
   
      
    render(){
        return(
            <div className='container pt-5'>
            <Stories/>
            

            {this.state.onLoad?<Posts loading/>:<Posts/>}
            
            
            </div>
        )
    }
}

export default Home;