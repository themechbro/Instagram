import react,{Component} from 'react';
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import TvIcon from '@mui/icons-material/Tv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleButton from '@mui/material/ToggleButton';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';






class Navbar extends Component{
    static defaultProps={
        navitem:[
            <HomeIcon/>,
            <SearchIcon/>,
            <ExploreIcon/>,
            <TvIcon/>,
            <MapsUgcIcon/>,
            <AccountCircleIcon/>

        ],
        title:'Instagram'
    }
    constructor(props){
        super(props);
    }


    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-transparent shadow-lg sticky-top'>
                <div className='container-fluid'>
                    <a href="#" className='navbar-brand p-3'>{this.props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        {this.props.navitem.map(i=>  <li className='nav-item'><a className='nav-link' href='#'><ToggleButton value={i} sx={{color:'light.main'}}>{i}</ToggleButton></a></li>)}
      </ul></div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
