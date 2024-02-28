import react, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import './login.css'
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';





class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div className='container-fluid'>
            <div className='card rounded shadow-sm w-50 m-auto mt-5 p-5 '>
                <div >
                <h1 >Instagram</h1>
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      action='/'
      className=' form'
    >
             <TextField id="outlined-basic" label="Email, Username or Phone" variant="outlined"  type='text' required/>
   <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required />
      <Button variant="contained" startIcon={<LoginIcon/>} type='submit'>Login </Button>

    </Box>

    <Divider sx={{color:'#424242', mt:2}}><Chip label="OR" size="small" /></Divider>
    
    <Button  sx={{mt:3}}  startIcon={<FacebookIcon/>}> Log In Using Facebook</Button>
<Box sx={{display:'flex', flexWrap:'wrap', flexDirection:'column', justifyContent:'center' }} >
    <Link href="#" underline="none">
       Forgot your Password?
      </Link>
      </Box>
    
                </div>
            </div>
            </div>
            )
    }
}

export default Login;