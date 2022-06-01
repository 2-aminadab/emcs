// import {React , useState} from 'react';
// import './aboutus.css'

// import { makeStyles } from "@material-ui/core/styles"

// import AddIcon from '@material-ui/icons/Add';
// import TopImage from '../../assets/beautiful_view.jpg'
// import {Fab , Box , Button, Container , Typography , Paper} from '@material-ui/core';

// const useStyles = makeStyles((theme) =>({
//     // topcontents: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         paddingBottom: "50px",
//         alignItems: "center",
//         marginTop: "10px",
//         width: "90vw",
//         height: "60vh",
//         backgroundImage: `url(${TopImage})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         color: "white",
//         fontSize: "45px",
//         borderBottomLeftRadius: "35px",
//         borderBottomRightRadius: "35px",
//      } , 
//      aboutUsDescript: {
//          width: "65%",
//          color: "white",
//          paddingTop: "20px",
//          justifyContent: "center"
//      },
//      fbbutton: {
//          marginTop: "10px"
//      }
//     }));

// function AboutUs() {

//     const classes = useStyles();
//     const [showMore , setShowMore] = useState(false);
//   return(
//      <Container className={classes.mainContainer}>
//              <Box className={classes.topcontents}>
//                    <p>About Our Company</p>
//                    <Typography className={classes.aboutUsDescript}>
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodsed do eiusmod tempor incididunt ut labore fgdgd gfgfd fgfgd hfgd gdgfg vv b  bvbfd ssdg fdfdfdv  vdgs  ssdg fdfdfdv  vdgs et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                    </Typography>
//                    <br />
                   
//                    <Button 
//                    variant="contained"
//                    marginTop="200px"
//                    >
//                        Send Message
//                    </Button>

//                      <Fab className={classes.fbbutton} color="primary" aria-label="add">
//                         <AddIcon onClick={()=> setShowMore(!showMore) }/>
//                      </Fab>
//              </Box>

//              <Box className={classes.aboutUsTeamDetails}>
 
//                  {showMore && (
//                 <>
//                           <div class="about-us">
//                               <div class="who-we-are">
//                                   <h3>Who we are</h3>
//                                   <span>orem Ipsum is simply dummy text of the
//                                       printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
//                               </div>
//                               <div class="cards">
//                                   <div class="card">
//                                       <div class="card-img card-img1"></div>
//                                       <div class="card-body">
//                                           <h3>Fentahun</h3>
//                                           <span>Student</span>
//                                           <p>orem Ipsum is simply dummy text of the printing
//                                               and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
//                                       </div>
//                               </div>


//                                   <div class="card">
//                                       <div class="card-img card-img2"></div>
//                                       <card class="card-body">
//                                           <h3>Esubalew</h3>
//                                           <span>Student</span>
//                                           <p>orem Ipsum is simply dummy
//                                               text of the printing and typesetting industry.
//                                               Lorem Ipsum has been the industry's standard dummy</p>
//                                       </card>
//                                   </div>

//                                   <div class="card">
//                                       <div class="card-img card-img3"></div>
//                                       <card class="card-body">
//                                           <h3>Eyoel A</h3>
//                                           <span>Student</span>
//                                           <p>orem Ipsum is simply dummy text of the printing
//                                               and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
//                                       </card>
//                                   </div>

//                                   <div class="card">
//                                       <div class="card-img card-img4"></div>
//                                       <card class="card-body">
//                                           <h3>Eyoel Z</h3>
//                                           <span>Student</span>
//                                           <p>orem Ipsum is simply dummy text
//                                               of the printing and typesetting industry.
//                                               Lorem Ipsum has been the industry's standard dummy</p>
//                                       </card>
//                                   </div>


                              
//                           </div>
//                       </div></>
          
//                  )
//                 }
//              </Box>
//      </Container> 
      
//   );
// }

// export default AboutUs;