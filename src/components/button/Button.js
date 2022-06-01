import {React , useState} from 'react';
import Card from './Card'
import { makeStyles } from "@material-ui/core/styles"
import {Button , Box , Container , Grid , Slider} from "@material-ui/core"
import Header from './Header'

const useStyles = makeStyles((theme)=> ({
    
    buttonStyle: {
        padding: "20px",
        width: "120px",
        height: '35px',        
    },
}));


function Button(){
   const classes = useStyles();
   return (
        <>
        <Container className={classes.buttonStyle}>
           
        </Container>        
        </>
    )
}

export default Button;