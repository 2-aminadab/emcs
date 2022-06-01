import React , {useState} from 'react'
import { Container, makeStyles, Typography , Box , Button} from '@material-ui/core'
import { Add , Settings , Notifications , ArrowBack , ArrowForward} from '@material-ui/icons'


    const useStyles = makeStyles((theme)=>({

        sideBar: {
           display: 'flex',
           flexDirection: 'column',
           backgroundColor: 'red',
           height: '100vh',
           width: '20vw',
           borderLeft: '1px solid black;'
        },
        sidebarButton: {          
          height: '45px',
          backgroundColor: 'blue',
          borderRadius: '12px',
          margin: '5px',
          padding: 'auto',
          color: 'white',
          size: '21px'
        }
    }));

function SideBar(){
    const classes = useStyles();
    const [showSidebar,setShowSidebar] = useState(false)

    return(
        <Container className={classes.sideBar}>        
            <Box className={classes.buttonGroup} >           
                <Button className={classes.sidebarButton} startIcon={<Add />} variant='contained' color="primary">Button One</Button>
            </Box>
            <Box className={classes.buttonGroup}>
                <Button className={classes.sidebarButton} startIcon={<Add />} variant='contained' color="primary">Button Two</Button>
            </Box>       
        </Container>
    )
}

export default SideBar;