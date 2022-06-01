import { Button, Container } from '@material-ui/core';
import React, { useEffect, useState , useRef } from 'react'
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme)=>({
    mainContainer: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%', 
      height: '50%', 
      border: '2px solid red'  
    }
}))

const handleLocationRequest = ()=>{
       
    navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
          alert("Result:  "+position);
        },
        function(error) {
          alert("Error Code = " + error.code + " - " + error.message);
        }
      );
}

const trackUsersLiveLocation = ()=>{

    if (navigator.geolocation) {
        alert('location updated successfully')
          navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
    }else{
        alert('getting location failed!!!')
    }
}

function ShowDetail(){
    const classes = useStyles();
    const [ip,setIP] = useState(''); 
    const [showIp , setShowIp] =  useState(false)   
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])

    return(
    <Container className={classes.mainContainer}>
        
        <Button variant='outlined' onClick={()=>{setShowIp(!showIp)}}>Show IP</Button>
        {
         showIp && (<>
        
          <div style={{color: 'blue',display: 'flex',flexDirection: 'column'}}>
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
          </div>
        </>)}

        <Button variant='outlined' onClick={handleLocationRequest}>GetLocation</Button>
        <Button variant='outlined' onClick={trackUsersLiveLocation}>Track Live Location</Button>
    </Container>
  )}

export default ShowDetail;