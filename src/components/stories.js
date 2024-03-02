import react,{Component} from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';



class Stories extends Component{
    static defaultProps={
        userImg:[
            'https://images.pexels.com/photos/8297121/pexels-photo-8297121.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/16015834/pexels-photo-16015834/free-photo-of-bearded-man-in-a-white-t-shirt-and-cap.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/8297121/pexels-photo-8297121.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/16015834/pexels-photo-16015834/free-photo-of-bearded-man-in-a-white-t-shirt-and-cap.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600'
        ]
    }

    constructor(props){
        super(props);
        this.state={onLoad:false}
    }
    componentDidMount(){
        {setTimeout(() => this.setState({ onLoad: true }), 2500);}
    }
    render(){
        return(
            <div className="container  d-flex justify-content-center align-items-center">
            {this.state.onLoad? <Stack direction="row" spacing={5} className=' mb-5 pe-auto' sx={{overflowX:'auto',whiteSpace:'nowrap'}} >
              {this.props.userImg.map(i=> <Tooltip title='Click to Watch'  enterDelay={500} leaveDelay={200}><Avatar alt='userpic' src={i}/></Tooltip>)}
            </Stack> : <Skeleton variant="rectangular" width={210} height={60} />}
           
            </div>
        )
    }
}
export default Stories;