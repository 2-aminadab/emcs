import React from 'react'
import {TextField} from '@material-ui/core'
import {SearchRounded} from '@material-ui/icons'
import './Header.css';

function Header({count}) {

  return( 
      <div className='header'>
         <nav>
           <ul className='button-list-items'>
            
              
                  <input type='text' className='headerBarSearch' placeholder='search here' style={{ height: '42px', width: '180px', outline: 'none' , color: 'black',background:'white' , outline: 'none' , border: 'none' , fontSize:'16px' , paddingLeft:'10px', borderRadius: '10px'}} />
                  <SearchRounded style={{color: 'blue',fontSize: '32px',position: 'absolute',left: '65.5%', cursor: 'pointer',top: '45'}} /> 
              
             <li > <a className='services' href="/services">Services</a> </li>
             <li> <a href="/Login">Favourite({count})</a> </li>
             <li> <a href="/register">Register</a> </li>
           </ul>
         </nav>
      </div>
  );
  
}

export default Header