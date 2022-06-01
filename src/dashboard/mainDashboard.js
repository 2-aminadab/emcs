import React , {useState} from 'react'
import { Container, makeStyles, Typography , Box , Button} from '@material-ui/core'
import { Add , Settings , Notifications , ArrowBack , ArrowForward} from '@material-ui/icons'
import SideBar from './SideBar';
    const useStyles = makeStyles((theme)=>({
        mainContainer: {
            display: 'flex',
            marginLeft: '0',
            padding: '0',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#eee',
        },

        dashboardContent: {
           display: 'flex',
           flexDirection: 'column',
           backgroundColor: 'lightgreen',
        },
    }));

function MainDashboard(){
    const classes = useStyles();
    return(
        <Container className={classes.mainContainer}> 
            <SideBar />       
            <Box className={classes.dashboardContent}>
                Dashboard Content
            </Box>
        </Container>
    )
}

export default MainDashboard;