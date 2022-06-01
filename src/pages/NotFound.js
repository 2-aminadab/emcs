import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@material-ui/core/styles';
import { Button, Typography, Container, Box } from '@material-ui/core';
import Header from '../components/header/Header'
// components
//import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

const btnStyle = {
  color: 'white',
  width: '180px',
  marginTop: '20px',
  marginLeft: '150px',
  backgroundColor: 'blue'
}

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    // <Page title="404 Page Not Found">
      <Container>   
        <Header />       
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center'  }}>

        <Box
            component="img"
            src="/static/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Typography style={{color: 'red'}} variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>          
          
          <Button style={btnStyle} to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
   
  );
}