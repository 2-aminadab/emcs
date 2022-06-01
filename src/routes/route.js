import React ,{useState} from 'react';
import Login from '.././pages/Login/Login'
import Home from '../components/Home'
import NotFound from '.././pages/NotFound'
import AboutUs from '.././pages/about/aboutUs'
import Register from '.././pages/register'
import mainDashboard from '.././dashboard/mainDashboard';
import ShowDetail from '../pages/showDetail'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function EMCSRoute(){
return(
    <div className="app">      
      <Router>
            {/* <Header />         */}
                  <Switch>
                    <Route exact path={["/" , "/home" , "/root"]} component={Home} /> 
                    <Route exact path="/login" component={Login} />   
                    <Route exact path="/about" component={AboutUs} /> 
                    <Route exact path="/register" component={Register} />  
                    <Route exact path="/dashboard" component={mainDashboard} /> 
                    <Route exact path="/location" component={ShowDetail} />        
                    <Route path='*'>
                        <NotFound />
                    </Route>
                  </Switch>       
       </Router>
    </div>
  );
}

export default EMCSRoute;