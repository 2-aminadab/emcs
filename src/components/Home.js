import {React , useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {Container,Box,Button} from "@material-ui/core"
import SearchBar from './search/Search'
import {SearchRounded,Favorite} from '@material-ui/icons'
import Header from '../components/header/Header'
import Carousel from './pharmaciesCarousel/Carousel'
import SearchResults from '../mock-data/search-result.json'
import logo from './../assets/logo.png'

const useStyles = makeStyles((theme)=> ({
    
    component: {
        display: "flex",
        flexDirection: "row",
        marginLeft: '-25px',
        position: 'fixed',
        left: '0px',
        top: '0px',
        color: 'rgba(69,101,238,0.95)', 
        backgroundImage: '/static/images/background-photo-21.jpg',      
    },

}));

 const searchItemsStyle= {
    display: 'flex' , 
    flexDirection: 'row',
    marginTop: '5px',
    width: '100%',
    height: '46px',
    paddingLeft: '5%',
    paddingTop: '10px'
 }


function Home(){
  const classes = useStyles();   
  const [favouriteCount , setFavouriteCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showSuggestion , setShowSuggestion] = useState(false)
  
  const childToParent = (searchKeyword) => {
    setSearchKeyword(searchKeyword);
    if(searchKeyword){
      setShowSuggestion(true)
    }else{
      setShowSuggestion(false)
    }
    console.log("Search Text: "+searchKeyword)
  }

  return(
      <>

       {/* Header Section of the page */}
        <div className='heade'>
          <nav>
            <div>
              <img style={{width: '260px' , height: '76px', marginTop: '20px' , marginLeft: '20px'}} src={logo} alt="logo image"  />
            </div> 

            <ul className='button-list-items'>
              <li>
                <a>
                Search Medicine
                </a>
              </li>
              <li> 
                <a>
                    Search Pharmacy
                </a>
              </li>
              <li>
                 <a>
                   Our Service
                  </a>

              </li>
              <li>
                <a>
                  About Us
                </a>
              </li>
              <li>
                  <a>
                  Contact Us
                  </a>
                </li>
            </ul>
          </nav>
         </div>


       {/* Body  Section */}

        <Container className={classes.component}>  

                   
           {/* <SearchBar childToParent={childToParent} left='0px' top='200px' /> 
           <img style={{width: '60vw' , marginLeft:'20vw', marginTop:'10vh',height: '100vh',position: 'absolute',top:'100px',zIndex: '-100'}} src="/static/images/background-photo-21.jpg" alt="landing page background picture" />
           { showSuggestion && (
              <Box className='searchContent' style={{borderRadius:'6px',marginTop: '40vh',height: '380px',width: '50vw',marginLeft: '25.72vw', background: '#fff'}}>               
               {
                   SearchResults.filter(result => {
                      if (searchKeyword === '') {
                        return result;
                      } else if (result.fromPharmcy.toLowerCase().includes(searchKeyword.toLowerCase())) {
                        return result;
                      }
                    }).map((result,index) => (
                      
                    <div key={index} className='found-item' style={searchItemsStyle}>                
                        <SearchRounded style={{marginLeft: '20px'}} /> 
                        <span style={{fontSize: '21px' , marginLeft: '10px'}}>{result.fromPharmcy}</span>
                        <Favorite style={{ position: 'absolute', left: '74vw' , cursor: 'pointer'}}  /> 
                      </div> 
                    ))
                }                         

              </Box>
           )}  */}

        </Container>   
      </>      
  )
}

export default Home