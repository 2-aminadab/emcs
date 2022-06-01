import {React , useRef, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {Container,Box} from "@material-ui/core"
import {SearchRounded,Cancel} from '@material-ui/icons'

const useStyles = makeStyles((theme)=> ({
    
    component: {      
        height: '50px',
        position: 'fixed',        
    }
}));



function SearchBar({left , top , childToParent}){
    const classes = useStyles(); 
    const searchInputRef = useRef();
    const [searchBarEmpty , setSearchBarEmpty] = useState(false);

   const handleChange = (event)=>{
     childToParent(event.target.value)

    if(event.target.value){
       setSearchBarEmpty(true)
      }else{
       setSearchBarEmpty(false)
      }
   }
   
    const searchBarStyle = {
      width: '50vw',
      height: '60px',
      outline: 'none',
      border: '1px solid rgba(69,101,238,0.95)',
      borderRadius: '10px',
      paddingLeft: '20px',
      fontSize: '20px',
      position: 'fixed',
      left: '350px',
      top:  '196px'
    }

    const searchIcon  = {
      position:"absolute",
    }

   return(
      <>
        <Container className={classes.component} style={{left: left,top: top , position: 'aboslute'}}> 
           <SearchRounded style={{left: left,top:  top, width: '4vw',height: '4vw',borderRadius: '50%',color: 'white',marginLeft: '20vw',padding: '7px'}} />
           <input ref={searchInputRef} type="text"  style={searchBarStyle} placeholder='search here' onChange={handleChange} />

           {searchBarEmpty && (
            <Cancel style={{ position: 'absolute',left: '76%',top: '0px', width: '4vw',height: '3.5vw',borderRadius: '50%',color: 'red',padding: '7px' , cursor: 'pointer'}} onClick={()=>{searchInputRef.current.value="";setSearchBarEmpty(false)}} />
           )}
        </Container>              
      </>
    )
}

export default SearchBar