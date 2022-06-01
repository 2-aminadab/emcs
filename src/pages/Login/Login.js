import { InputLabel, TextField,IconButton , InputAdornment, Typography , Box , Container} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from '../../components/header/Header'

import "./Login.css";


const useStyle = makeStyles((theme) =>({

    mainContainer: {
      backgroundColor: "#545",
    },

    loginContainer: {
      border: "1px solid red",
      height: "300px"
    }
}));

const Login = () => {
  const classses  = useState();
  const [ username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword , setShowPassword] = useState(false);

  function toggleShowPassword(){
    setShowPassword( showPassword =>  !showPassword );
  }

  return (
    <Container>
        <Header /> 
        <Box className={classses.mainContainer} >
            <Box className='logIn-card'>
                <form method="post" action="/action">

                    <label>Username or Email * </label>
                    <input name="username" type="text" placeholder="username or email *" />  

                    <label>Password * </label>
                    <input name="pass" id="pass" type="password" placeholder="Password *" />  
                    
                    <input name="login-btn" className='login-btn' type="submit" value="Login" /> 
                    <a href="http://localhost:3000/register"> Forgot Your Password? </a>
                    <hr />
                    <input type="button" value="Create New Account" />
                </form>
            </Box>          
        </Box>        
    </Container>    
  );
};

export default Login;